import { useStakingRead } from "../hooks/useStakingRead"
import { formatUnits } from "viem"

export default function ContractStats() {
  const { contractInfo, apr } = useStakingRead()

  if (!contractInfo) return null

  return (
    <div>
      <div>Total Staked: {formatUnits(contractInfo.staked, 18)} MTXs</div>
      <div>Available Rewards: {formatUnits(contractInfo.availableRewards, 18)} MTXs</div>
      <div>APR: {apr / 100}%</div>
    </div>
  )
}
