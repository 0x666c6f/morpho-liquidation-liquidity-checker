import { exit } from "process"
import { getMarkets, handleMarket } from "./morpho-markets/markets"

async function main() {
  const markets = await getMarkets()
  if (!markets || markets.length === 0) {
    console.log("No markets found")
    return
  }
  for (const market of markets) {
    if (market.collateralAsset) await handleMarket(market)
  }
}

main()
