import { SwapParams, SwapResponse } from "@morpho-org/blue-sdk-ethers-liquidation"
import { ONE_INCH_API_BASE_URL } from "@morpho-org/blue-sdk-ethers-liquidation/lib/1inch"
import { DexSwap } from "./dex"

export async function get1InchSwap(
  swapParams: SwapParams,
  apiKey = process.env.ONE_INCH_SWAP_API_KEY
): Promise<DexSwap> {
  const url = new URL(`/swap/v6.0/${swapParams.chainId}/quote`, ONE_INCH_API_BASE_URL)
  Object.entries(swapParams).forEach(([key, value]) => {
    if (value != null) {
      url.searchParams.set(key, value.toString())
    }
  })

  const res = await fetch(url, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  })

  const data = await res.json()
  if (!res.ok) {
    console.log(`➡ 1inch error: ${data.statusCode} ${data.error} - ${data.description}`)
  }
  return {
    success: res.ok,
    destAmount: res.ok ? BigInt(data.dstAmount) : 0n,
  }
}
