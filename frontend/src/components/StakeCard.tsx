import { useState } from "react"
import { useStakingWrite } from "../hooks/useStakingWrite"
import { useStakingRead } from "../hooks/useStakingRead"
import WorldIdGate from "./WorldIdGate"

export default function StakeCard() {
  const [amount, setAmount] = useState("")
  const { stake } = useStakingWrite()
  const { hasRewards } = useStakingRead()

  return (
    <WorldIdGate>
      <div>
        <h3>Stake MTXs</h3>

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button
          disabled={!hasRewards || !amount}
          onClick={() => stake(amount)}
        >
          Stake
        </button>
      </div>
    </WorldIdGate>
  )
}
