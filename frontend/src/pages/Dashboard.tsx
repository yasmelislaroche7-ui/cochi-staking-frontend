import { useStakingRead } from "../hooks/useStakingRead";
import { useStakingWrite } from "../hooks/useStakingWrite";
import { parseUnits } from "ethers";

export default function Dashboard() {
  const info = useStakingRead();
  const actions = useStakingWrite();

  return (
    <div>
      <h2>Matrix Staking</h2>

      <p>Staked: {info?.[0]?.toString()}</p>
      <p>Pending: {info?.[1]?.toString()}</p>

      <button onClick={() => actions.approve(parseUnits("100", 18))}>
        Approve 100
      </button>

      <button onClick={() => actions.stake(parseUnits("100", 18))}>
        Stake 100
      </button>

      <button onClick={() => actions.claim()}>
        Claim
      </button>

      <button onClick={() => actions.unstake(parseUnits("100", 18))}>
        Unstake 100
      </button>
    </div>
  );
}
