import { SwapParams } from "@morpho-org/blue-sdk-ethers-liquidation"
import { BASE_DELAY, DexSwap, MAX_RETRIES } from "./dex"
import { sleep } from "../utils/utils"
import { ONE_INCH_API_BASE_URL } from "@morpho-org/blue-sdk-ethers-liquidation/lib/1inch"

export async function get1InchSwap(
  swapParams: SwapParams,
  apiKey = process.env.ONE_INCH_SWAP_API_KEY
): Promise<DexSwap> {
  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    const url = new URL(`/swap/v6.0/${swapParams.chainId}/quote`, ONE_INCH_API_BASE_URL)
    Object.entries(swapParams).forEach(([key, value]) => {
      if (value != null) {
        url.searchParams.set(key, value.toString())
      }
    })

    try {
      const res = await fetch(url, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      })

      const data = await res.json()

      if (!res.ok) {
        console.log(`➡ 1inch error: ${data.statusCode} ${data.error} - ${data.description}`)

        if (data.description?.includes("insufficient liquidity")) {
          console.log(`1Inch - Trying again with a lower amount: `, swapParams.amount)
          swapParams.amount = BigInt(swapParams.amount) / 2n
          return await get1InchSwap(swapParams)
        }

        if (res.status === 429 || data.error === "rate limit exceeded") {
          const delay = BASE_DELAY * Math.pow(2, attempt)
          console.log(`Rate limit hit. Retrying in ${delay}ms...`)
          await sleep(delay)
          continue
        }

        throw new Error(`HTTP error! status: ${res.status}`)
      }

      return {
        success: true,
        destAmount: BigInt(data.dstAmount),
      }
    } catch (error) {
      console.log(`➡ 1inch error: ${error}`)
    }
  }

  return {
    success: false,
    destAmount: 0n,
  }
}
