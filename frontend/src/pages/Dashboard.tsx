import { useWallet } from "../hooks/useWallet"
import { useStakingRead } from "../hooks/useStakingRead"
import { StakeCard } from "../components/StakeCard"
import { ClaimCard } from "../components/ClaimCard"
import { UnstakeCard } from "../components/UnstakeCard"
import { ContractStats } from "../components/ContractStats"

export default function Dashboard() {
  const { address } = useWallet()
  const data = useStakingRead(address!)

  if (!address) return <div>Connect World App Wallet</div>

  return (
    <div className="matrix">
      <ContractStats data={data} />
      <StakeCard />
      <ClaimCard data={data} />
      <UnstakeCard data={data} />
    </div>
  )
}
