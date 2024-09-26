import { getMarkets, handleMarket, MarketLiquidity } from "./morpho-markets/markets"
import { Parser } from "json2csv"
import fs from "node:fs"

const csvFields: (keyof MarketLiquidity)[] = [
  "loanAsset",
  "collateralAsset",
  "totalLoanAsset",
  "totalLoanAssetUsd",
  "totalCollateralAsset",
  "totalCollateralAssetUsd",
  "totalRecoverableLoanAsset",
  "recoverableRatio",
]

async function main() {
  const markets = await getMarkets()
  if (!markets || markets.length === 0) {
    console.log("No markets found")
    return
  }
  const marketLiquidities: MarketLiquidity[] = []
  for (const market of markets) {
    if (market.collateralAsset) {
      const liquidity = await handleMarket(market)
      marketLiquidities.push(liquidity)
    }
  }
  marketLiquidities.sort((a, b) => b.totalLoanAssetUsd - a.totalLoanAssetUsd)
  const json2csvParser = new Parser({ fields: csvFields })
  const csv = json2csvParser.parse(marketLiquidities)

  fs.writeFileSync("markets.csv", csv)
}

main()
