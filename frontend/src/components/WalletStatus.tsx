import { useWallet } from "../hooks/useWallet"

export default function WalletStatus() {
  const { address, chainId, isConnected } = useWallet()

  if (!isConnected) {
    return <div>Wallet not connected</div>
  }

  return (
    <div style={{ fontSize: 12 }}>
      <div>Wallet: {address}</div>
      <div>Chain: {chainId === 480 ? "Worldchain Mainnet" : "Wrong network"}</div>
    </div>
  )
}
