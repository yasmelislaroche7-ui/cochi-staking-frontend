type Props = {
  onStake?: () => void;
};

export function StakeCard({ onStake }: Props) {
  return (
    <div>
      <h3>Stake</h3>
      <button onClick={onStake}>Stake</button>
    </div>
  );
}
