import { Asset, Chain, createClient, MarketState } from "../morpho-gql"
import { config } from "../config"
import { MarketUtils } from "@morpho-org/blue-sdk"
import { getParaswapSwap } from "../dex/paraswap"
import { get1InchSwap } from "../dex/1inch"

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
  await getMarketDexLiquidity(market)
}

export async function getMarketDexLiquidity(market: MarketData) {
  let liquidity = BigInt(market.state.collateralAssets)
  let supply = BigInt(market.state.supplyAssets) / 2n
  const swaps = await Promise.all([
    await get1InchSwap({
      chainId: market.loanAsset.chain.id,
      src: market.collateralAsset.address,
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
      src: market.collateralAsset.address,
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
  if (((swaps[0].success || swaps[1].success) && swaps[0].destAmount > supply) || swaps[1].destAmount > supply) {
    console.log(`Market ${market.loanAsset.symbol}-${market.collateralAsset.symbol} - ✅ Liquidity OK`)
  } else {
    console.log(`Market ${market.loanAsset.symbol}-${market.collateralAsset.symbol} - ❌ Liquidity KO`)
  }
}

function getSlippage(market: MarketData) {
  return (MarketUtils.getLiquidationIncentiveFactor({ lltv: market.lltv }) - BigInt.WAD) / 2n
}
