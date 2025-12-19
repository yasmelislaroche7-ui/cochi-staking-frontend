import { useEffect, useState } from "react";
import { useWallet } from "../world/wallet";
import { readUserInfo } from "../services/staking.service";

export const useStakingRead = () => {
  const { provider, address } = useWallet();
  const [info, setInfo] = useState<any>();

  useEffect(() => {
    if (!provider || !address) return;

    readUserInfo(provider, address).then(setInfo);
  }, [provider, address]);

  return info;
};
