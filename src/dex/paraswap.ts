import { SwapParams } from "@morpho-org/blue-sdk-ethers-liquidation"
import { constructSimpleSDK } from "@paraswap/sdk"
import { DexSwap } from "./dex"

export async function getParaswapSwap(
  swapParams: SwapParams & { srcDecimals: number; destDecimals: number }
): Promise<DexSwap> {
  const paraSwap = constructSimpleSDK({
    chainId: Number(swapParams.chainId),
    fetch: fetch,
  })

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
  } catch (error) {
    console.log(`➡ Paraswap error: ${error}`)
    return {
      success: false,
      destAmount: 0n,
    }
  }
}
