import { useWallet } from "../hooks/useWallet";

export function WalletStatus() {
  const { account, loading, connected } = useWallet();

  if (loading) return <p>Cargando wallet...</p>;
  if (!connected) return <p>Wallet no conectada</p>;

  return (
    <p>
      Wallet conectada:{" "}
      <strong>
        {account?.address.slice(0, 6)}...
        {account?.address.slice(-4)}
      </strong>
    </p>
  );
}
