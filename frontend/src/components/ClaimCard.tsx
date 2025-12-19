type Props = {
  onClaim?: () => void;
};

export function ClaimCard({ onClaim }: Props) {
  return (
    <div>
      <h3>Claim Rewards</h3>
      <button onClick={onClaim}>Claim</button>
    </div>
  );
}
