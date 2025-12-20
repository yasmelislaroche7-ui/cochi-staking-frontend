import { useEffect, useState } from "react";
import { publicClient } from "../world/wallet";
import { STAKING_ADDRESS } from "../config/contracts";
import { stakingAbi } from "../abi/MatrixStaking";
import { REFRESH_INTERVAL } from "../config/constants";

export function useStakingRead(address?: `0x${string}`) {
  const [pendingRewards, setPendingRewards] = useState<bigint>(0n);
  const [stakedAmount, setStakedAmount] = useState<bigint>(0n);

  useEffect(() => {
    if (!address) return;

    const fetch = async () => {
      const [info, rewards] = await Promise.all([
        publicClient.readContract({
          address: STAKING_ADDRESS,
          abi: stakingAbi,
          functionName: "userInfo",
          args: [address],
        }),
        publicClient.readContract({
          address: STAKING_ADDRESS,
          abi: stakingAbi,
          functionName: "pendingRewards",
          args: [address],
        }),
      ]);

      setStakedAmount(info[0]);
      setPendingRewards(rewards);
    };

    fetch();
    const i = setInterval(fetch, REFRESH_INTERVAL);
    return () => clearInterval(i);
  }, [address]);

  return { stakedAmount, pendingRewards };
}
