import stakingAbi from "../abi/MatrixStaking.json"
import tokenAbi from "../abi/ERC20.json"
import { CONTRACTS } from "../config/contracts"
import { walletClient } from "../world/wallet"

export function useStakingWrite(address?: `0x${string}`) {
  const write = async (fn: string, args: any[] = []) => {
    if (!address) return
    return walletClient.writeContract({
      address: CONTRACTS.STAKING,
      abi: stakingAbi,
      functionName: fn,
      args,
      account: address,
    })
  }

  const approve = async (amount: bigint) =>
    walletClient.writeContract({
      address: CONTRACTS.TOKEN,
      abi: tokenAbi,
      functionName: "approve",
      args: [CONTRACTS.STAKING, amount],
      account: address!,
    })

  return { write, approve }
}
