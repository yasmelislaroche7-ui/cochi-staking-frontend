import { createContext, useContext, useEffect, useState } from "react"
import { ethers } from "ethers"
import { WORLDCHAIN } from "../config/world"

type WalletContextType = {
  provider: ethers.BrowserProvider | null
  signer: ethers.Signer | null
  address: string | null
  chainId: number | null
  connected: boolean
}

const WalletContext = createContext<WalletContextType>({
  provider: null,
  signer: null,
  address: null,
  chainId: null,
  connected: false,
})

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null)
  const [signer, setSigner] = useState<ethers.Signer | null>(null)
  const [address, setAddress] = useState<string | null>(null)
  const [chainId, setChainId] = useState<number | null>(null)

  useEffect(() => {
    if (!window.ethereum) return

    const init = async () => {
      const p = new ethers.BrowserProvider(window.ethereum)
      const s = await p.getSigner()
      const addr = await s.getAddress()
      const net = await p.getNetwork()

      setProvider(p)
      setSigner(s)
      setAddress(addr)
      setChainId(Number(net.chainId))
    }

    init()
  }, [])

  return (
    <WalletContext.Provider
      value={{
        provider,
        signer,
        address,
        chainId,
        connected: !!address && chainId === WORLDCHAIN.id,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}

export const useWallet = () => useContext(WalletContext)
