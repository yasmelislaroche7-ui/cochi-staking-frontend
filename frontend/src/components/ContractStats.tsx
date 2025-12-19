type Props = {
  totalStaked?: string;
};

export function ContractStats({ totalStaked = "0" }: Props) {
  return (
    <div>
      <p>Total staked: {totalStaked}</p>
    </div>
  );
}
