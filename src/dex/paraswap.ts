import { SwapParams } from "@morpho-org/blue-sdk-ethers-liquidation"
import { constructSimpleSDK } from "@paraswap/sdk"
import { BASE_DELAY, DexSwap, MAX_RETRIES } from "./dex"

export async function getParaswapSwap(
  swapParams: SwapParams & { srcDecimals: number; destDecimals: number }
): Promise<DexSwap> {
  const paraSwap = constructSimpleSDK({
    chainId: Number(swapParams.chainId),
    fetch: fetch,
  })

  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    try {
      const paraSwapData = await paraSwap.swap.getRate({
        srcToken: swapParams.src,
        srcDecimals: swapParams.srcDecimals,
        destToken: swapParams.dst,
        destDecimals: swapParams.destDecimals,
        userAddress: swapParams.from,
        amount: swapParams.amount.toString(),
      })

      return {
        success: true,
        destAmount: BigInt(paraSwapData.destAmount),
      }
    } catch (error: any) {
      console.log(`➡ Paraswap error: ${error}`)

      if (
        error.message.includes("ESTIMATED_LOSS_GREATER_THAN_MAX_IMPACT") ||
        error.message.includes("No routes found with enough liquidity")
      ) {
        swapParams.amount = (BigInt(swapParams.amount) * 9n) / 10n
        console.log(`Paraswap - Trying again with a lower amount: `, swapParams.amount)
        return await getParaswapSwap(swapParams)
      }

      if (attempt === MAX_RETRIES - 1) {
        return {
          success: false,
          destAmount: 0n,
        }
      }

      const delay = BASE_DELAY * Math.pow(2, attempt)
      console.log(`Error occurred. Retrying in ${delay}ms...`)
      await new Promise(resolve => setTimeout(resolve, delay))
    }
  }

  return {
    success: false,
    destAmount: 0n,
  }
}
