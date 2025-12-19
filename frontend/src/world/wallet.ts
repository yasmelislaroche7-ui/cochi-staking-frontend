import { createContext, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { WORLDCHAIN } from "../config/world";

type WalletCtx = {
  provider?: ethers.BrowserProvider;
  signer?: ethers.Signer;
  address?: string;
};

const WalletContext = createContext<WalletCtx>({});

export const WorldWalletProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<WalletCtx>({});

  useEffect(() => {
    const connect = async () => {
      if (!window.ethereum) return;

      const provider = new ethers.BrowserProvider(window.ethereum, {
        chainId: WORLDCHAIN.chainId,
        name: WORLDCHAIN.name,
      });

      const signer = await provider.getSigner();
      const address = await signer.getAddress();

      setState({ provider, signer, address });
    };

    connect();
  }, []);

  return <WalletContext.Provider value={state}>{children}</WalletContext.Provider>;
};

export const useWallet = () => useContext(WalletContext);
