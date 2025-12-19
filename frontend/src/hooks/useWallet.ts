import { useEffect, useState } from "react";
import { getWalletAccount, WalletAccount } from "../world/wallet";

export function useWallet() {
  const [account, setAccount] = useState<WalletAccount | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const acc = await getWalletAccount();
      setAccount(acc);
      setLoading(false);
    }

    load();
  }, []);

  return {
    account,
    loading,
    connected: !!account,
  };
}
