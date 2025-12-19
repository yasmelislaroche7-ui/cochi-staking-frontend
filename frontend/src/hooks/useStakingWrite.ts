import { useWallet } from "../world/wallet";
import * as staking from "../services/staking.service";
import * as token from "../services/token.service";

export const useStakingWrite = () => {
  const { signer } = useWallet();
  if (!signer) throw new Error("No signer");

  return {
    approve: (amount: bigint) => token.approveToken(signer, amount),
    stake: (amount: bigint) => staking.stake(signer, amount),
    unstake: (amount: bigint) => staking.unstake(signer, amount),
    claim: () => staking.claim(signer),
  };
};
