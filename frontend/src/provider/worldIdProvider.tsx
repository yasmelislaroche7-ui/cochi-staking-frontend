import { createContext, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";

type WorldContextType = {
  provider: ethers.BrowserProvider | null;
  signer: ethers.JsonRpcSigner | null;
  address: string | null;
};

const WorldContext = createContext<WorldContextType>({
  provider: null,
  signer: null,
  address: null,
});

export const WorldProvider = ({ children }: { children: React.ReactNode }) => {
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const [signer, setSigner] = useState<ethers.JsonRpcSigner | null>(null);
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    const connect = async () => {
      if (!(window as any).ethereum) return;

      const browserProvider = new ethers.BrowserProvider(
        (window as any).ethereum
      );

      const signer = await browserProvider.getSigner();
      const address = await signer.getAddress();

      setProvider(browserProvider);
      setSigner(signer);
      setAddress(address);
    };

    connect();
  }, []);

  return (
    <WorldContext.Provider value={{ provider, signer, address }}>
      {children}
    </WorldContext.Provider>
  );
};

export const useWorld = () => useContext(WorldContext);
