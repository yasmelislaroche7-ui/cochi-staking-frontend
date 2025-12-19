import { useState } from "react"
import { useStakingWrite } from "../hooks/useStakingWrite"
import { useStakingRead } from "../hooks/useStakingRead"
import WorldIdGate from "./WorldIdGate"

export default function UnstakeCard() {
  const [amount, setAmount] = useState("")
  const { unstake } = useStakingWrite()
  const { canUnstake } = useStakingRead()

  return (
    <WorldIdGate>
      <div>
        <h3>Unstake</h3>

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button
          disabled={!canUnstake || !amount}
          onClick={() => unstake(amount)}
        >
          Unstake
        </button>
      </div>
    </WorldIdGate>
  )
}
