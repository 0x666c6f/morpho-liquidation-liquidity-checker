import { createPublicClient, http } from "viem"
import { mainnet } from "viem/chains"
import CurveStableSwapNGABI from "../abi/CurveStableSwapNG.json"

export async function getUSD0USD0PlusPlusWitdhrawal(amount: bigint) {
  const publicClient = createPublicClient({
    chain: mainnet,
    transport: http(),
  })
  try {
    return (await publicClient.readContract({
      address: "0x1d08E7adC263CfC70b1BaBe6dC5Bb339c16Eec52",
      abi: CurveStableSwapNGABI,
      functionName: "calc_withdraw_one_coin",
      args: [amount, 0],
    })) as bigint
  } catch (error) {
    return getUSD0USD0PlusPlusWitdhrawal(amount / 2n)
  }
}
