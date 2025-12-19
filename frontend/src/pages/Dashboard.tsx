import { useEffect } from "react"
import { useWallet } from "../provider/WalletProvider"
import { useWorldId } from "../hooks/useWorldId"

import WalletStatus from "../components/WalletStatus"
import WorldIdGate from "../components/WorldIdGate"
import StakeCard from "../components/StakeCard"
import ClaimCard from "../components/ClaimCard"
import UnstakeCard from "../components/UnstakeCard"
import ContractStats from "../components/ContractStats"

export default function Dashboard() {
  const { connected } = useWallet()
  const { verified } = useWorldId()

  useEffect(() => {
    const interval = setInterval(() => {
      // fuerza refresco cada segundo (hooks internos)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "black",
        color: "#00ff99",
        fontFamily: "monospace",
        padding: "12px",
        backgroundImage:
          "radial-gradient(circle at center, #001a12 0%, black 70%)",
      }}
    >
      {/* MATRIX EFFECT */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          background:
            "linear-gradient(rgba(0,255,100,0.05) 1px, transparent 1px)",
          backgroundSize: "100% 4px",
          animation: "matrix 3s linear infinite",
        }}
      />

      <WalletStatus />

      {!connected && (
        <p style={{ marginTop: 20 }}>Connect World App Wallet</p>
      )}

      {connected && (
        <WorldIdGate>
          <ContractStats />

          <div style={{ marginTop: 20 }}>
            <StakeCard />
            <ClaimCard />
            <UnstakeCard />
          </div>
        </WorldIdGate>
      )}
    </div>
  )
}
