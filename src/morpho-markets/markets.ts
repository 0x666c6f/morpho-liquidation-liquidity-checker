import { Asset, Chain, createClient, MarketState } from "../morpho-gql"
import { config } from "../config"
import { ChainId, MarketUtils } from "@morpho-org/blue-sdk"
import { getParaswapSwap } from "../dex/paraswap"
import { get1InchSwap } from "../dex/1inch"
import { getPendleSwapCallData, pendleMarkets } from "@morpho-org/blue-sdk-ethers-liquidation"
import { getPendleSwap } from "../dex/pendle"
import { getUSD0USD0PlusPlusWitdhrawal } from "../dex/curve"

export type MarketData = {
  id: string
  uniqueKey: string
  lltv: bigint
  state: Pick<
    MarketState,
    "borrowAssets" | "collateralAssets" | "borrowAssetsUsd" | "collateralAssetsUsd" | "supplyAssets" | "supplyAssetsUsd"
  >
  loanAsset: Pick<Asset, "id" | "address" | "symbol" | "decimals" | "name"> & {
    chain: Pick<Chain, "id">
  }
  collateralAsset: Pick<Asset, "id" | "address" | "symbol" | "decimals" | "name"> & {
    chain: Pick<Chain, "id">
  }
}

export type MarketLiquidity = {
  loanAsset: string
  collateralAsset: string
  totalLoanAsset: bigint
  totalLoanAssetUsd: number
  totalCollateralAsset: bigint
  totalCollateralAssetUsd: number
  totalRecoverableLoanAsset: bigint
  recoverableRatio: number
}

export async function getMarkets() {
  const client = createClient()
  const res = await client.query({
    markets: {
      __args: {
        where: {
          whitelisted: true,
        },
      },
      items: {
        id: true,
        uniqueKey: true,
        lltv: true,
        state: {
          borrowAssets: true,
          collateralAssets: true,
          borrowAssetsUsd: true,
          collateralAssetsUsd: true,
          supplyAssets: true,
          supplyAssetsUsd: true,
        },
        loanAsset: {
          id: true,
          chain: {
            id: true,
          },
          address: true,
          symbol: true,
          decimals: true,
          name: true,
        },
        collateralAsset: {
          id: true,
          chain: {
            id: true,
          },
          address: true,
          symbol: true,
          decimals: true,
          name: true,
        },
      },
    },
  })
  return res.markets.items as MarketData[]
}

export async function handleMarket(market: MarketData) {
  return await getMarketDexLiquidity(market)
}

export async function getMarketDexLiquidity(market: MarketData): Promise<MarketLiquidity> {
  let liquidity = BigInt(market.state.collateralAssets)
  let src = market.collateralAsset.address
  if (market.collateralAsset.symbol.startsWith("PT-")) {
    const swap = await getPendleSwap(
      market.collateralAsset.chain.id === ChainId.EthMainnet ? ChainId.EthMainnet : ChainId.BaseMainnet,
      market.collateralAsset.address,
      liquidity.toString()
    )
    liquidity = swap.success ? swap.destAmount : 0n
    src = swap.underlying
  }
  if (market.collateralAsset.symbol === "USD0USD0++") {
    const amount = await getUSD0USD0PlusPlusWitdhrawal(liquidity)
    liquidity = amount
    src = "0x73A15FeD60Bf67631dC6cd7Bc5B6e8da8190aCF5" //USD0
  }
  const swaps = await Promise.all([
    await get1InchSwap({
      chainId: market.loanAsset.chain.id,
      src: src,
      dst: market.loanAsset.address,
      amount: liquidity,
      from: config.executorAddress,
      slippage: config.slippage,
      includeTokensInfo: false,
      includeProtocols: false,
      includeGas: false,
      allowPartialFill: false,
      disableEstimate: true,
      usePermit2: false,
    }),
    await getParaswapSwap({
      chainId: market.loanAsset.chain.id,
      src: src,
      dst: market.loanAsset.address,
      amount: liquidity,
      from: config.executorAddress,
      slippage: config.slippage,
      includeTokensInfo: false,
      includeProtocols: false,
      includeGas: false,
      allowPartialFill: false,
      disableEstimate: true,
      usePermit2: false,
      srcDecimals: market.collateralAsset.decimals,
      destDecimals: market.loanAsset.decimals,
    }),
  ])

  const maxRecoverableLoanAsset = swaps[0].destAmount > swaps[1].destAmount ? swaps[0].destAmount : swaps[1].destAmount
  const recoverableRatio =
    market.state.supplyAssets > 0 ? Number(Number(maxRecoverableLoanAsset) / Number(market.state.supplyAssets)) : 0
  console.log(
    `Market ${market.loanAsset.symbol}-${market.collateralAsset.symbol} - DEX Liquidity ratio = ${recoverableRatio}`
  )
  return {
    loanAsset: market.loanAsset.symbol,
    collateralAsset: market.collateralAsset.symbol,
    totalLoanAsset: BigInt(market.state.supplyAssets),
    totalLoanAssetUsd: market.state!.supplyAssetsUsd!,
    totalCollateralAsset: BigInt(market.state.collateralAssets),
    totalCollateralAssetUsd: market.state!.collateralAssetsUsd!,
    totalRecoverableLoanAsset: maxRecoverableLoanAsset,
    recoverableRatio: recoverableRatio,
  }
}

function getSlippage(market: MarketData) {
  return (MarketUtils.getLiquidationIncentiveFactor({ lltv: market.lltv }) - BigInt.WAD) / 2n
}
