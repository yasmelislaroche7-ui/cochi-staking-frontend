export type WalletAccount = {
  address: `0x${string}`;
};

export async function getWalletAccount(): Promise<WalletAccount | null> {
  if (typeof window === "undefined") return null;
  if (!window.ethereum) return null;

  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });

  if (!accounts || accounts.length === 0) return null;

  return { address: accounts[0] };
}
