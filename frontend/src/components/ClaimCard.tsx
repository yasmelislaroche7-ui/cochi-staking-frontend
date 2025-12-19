import { useStakingWrite } from "../hooks/useStakingWrite"
import { useStakingRead } from "../hooks/useStakingRead"
import { formatUnits } from "viem"
import WorldIdGate from "./WorldIdGate"

export default function ClaimCard() {
  const { claim } = useStakingWrite()
  const { pendingRewards } = useStakingRead()

  const hasRewards = pendingRewards > 0n

  return (
    <WorldIdGate>
      <div>
        <h3>Claim Rewards</h3>
        <div>
          Pending: {formatUnits(pendingRewards, 18)} MTXs
        </div>

        <button disabled={!hasRewards} onClick={claim}>
          Claim
        </button>
      </div>
    </WorldIdGate>
  )
}
