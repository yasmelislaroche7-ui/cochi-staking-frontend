import { walletClient } from "../world/wallet";
import { STAKING_ADDRESS } from "../config/contracts";
import { stakingAbi } from "../abi/MatrixStaking";

export function useStakingWrite(account?: `0x${string}`) {
  if (!account) {
    return {
      stake: async () => {},
      unstake: async () => {},
      claim: async () => {},
    };
  }

  const stake = async (amount: bigint) => {
    await walletClient.writeContract({
      address: STAKING_ADDRESS,
      abi: stakingAbi,
      functionName: "stake",
      args: [amount],
      account,
    });
  };

  const unstake = async () => {
    await walletClient.writeContract({
      address: STAKING_ADDRESS,
      abi: stakingAbi,
      functionName: "unstake",
      account,
    });
  };

  const claim = async () => {
    await walletClient.writeContract({
      address: STAKING_ADDRESS,
      abi: stakingAbi,
      functionName: "claim",
      account,
    });
  };

  return { stake, unstake, claim };
}
