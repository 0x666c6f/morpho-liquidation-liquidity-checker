import { ChainId } from "@morpho-org/blue-sdk"
import { getPendleRedeemCallData, getPendleSwapCallData, pendleMarkets } from "@morpho-org/blue-sdk-ethers-liquidation"
import { config } from "../config"
import { DexSwap } from "./dex"

export async function getPendleSwap(
  chainId: ChainId,
  collatAsset: string,
  amount: string
): Promise<DexSwap & { underlying: string }> {
  const pendleMarketData = pendleMarkets[chainId][collatAsset]
  try {
    const maturity = pendleMarketData?.maturity
    if (!maturity) {
      console.log(`➡ Pendle error: No maturity for ${collatAsset}`)
      return {
        success: false,
        destAmount: 0n,
        underlying: "",
      }
    }
    if (maturity < new Date()) {
      const redeemCallData = await getPendleRedeemCallData(chainId, {
        receiver: config.executorAddress,
        slippage: config.slippage,
        yt: pendleMarketData.yieldTokenAddress,
        amountIn: amount,
        tokenOut: pendleMarketData.underlyingTokenAddress,
        enableAggregator: true,
      })
      return {
        success: true,
        destAmount: BigInt(redeemCallData.data.amountOut),
        underlying: pendleMarketData.underlyingTokenAddress,
      }
    } else {
      const swapData = await getPendleSwapCallData(chainId, pendleMarketData.address, {
        receiver: config.executorAddress,
        slippage: config.slippage,
        tokenIn: collatAsset,
        tokenOut: pendleMarketData.underlyingTokenAddress,
        amountIn: amount,
      })
      return {
        success: true,
        destAmount: BigInt(swapData.data.amountOut),
        underlying: pendleMarketData.underlyingTokenAddress,
      }
    }
  } catch (error: any) {
    if (error.message.includes("Bad Request")) {
      return await getPendleSwap(chainId, collatAsset, ((BigInt(amount) * 9n) / 10n).toString())
    }
    console.log(`➡ Pendle error: ${error}`)

    return {
      success: false,
      destAmount: 0n,
      underlying: "",
    }
  }
}
