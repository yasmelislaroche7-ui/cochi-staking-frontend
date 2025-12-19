type Props = {
  onUnstake?: () => void;
};

export function UnstakeCard({ onUnstake }: Props) {
  return (
    <div>
      <h3>Unstake</h3>
      <button onClick={onUnstake}>Unstake</button>
    </div>
  );
}
