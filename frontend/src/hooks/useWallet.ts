import { useEffect, useState } from "react"
import { walletClient } from "../world/wallet"

export function useWallet() {
  const [address, setAddress] = useState<`0x${string}` | null>(null)

  useEffect(() => {
    walletClient.getAddresses().then(a => setAddress(a[0] ?? null))
  }, [])

  return { address }
}
