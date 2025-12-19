type Props = {
  onVerified: (proof: unknown) => void;
};

export function WorldId({ onVerified }: Props) {
  return (
    <button onClick={() => onVerified({})}>
      Verificar con World ID
    </button>
  );
}
