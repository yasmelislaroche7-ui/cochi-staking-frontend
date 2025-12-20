import { WalletStatus } from "../components/WalletStatus";
import { StakeCard } from "../components/StakeCard";
import { ClaimCard } from "../components/ClaimCard";
import { UnstakeCard } from "../components/UnstakeCard";
import { ContractStats } from "../components/ContractStats";

export function Dashboard() {
  return (
    <div>
      <WalletStatus />
      <ContractStats />
      <StakeCard />
      <ClaimCard />
      <UnstakeCard />
    </div>
  );
}
