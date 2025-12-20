import { createPublicClient, createWalletClient, http } from "viem";
import { worldchain } from "../config/world";

export const publicClient = createPublicClient({
  chain: worldchain,
  transport: http(worldchain.rpcUrl),
});

export const walletClient = createWalletClient({
  chain: worldchain,
  transport: http(worldchain.rpcUrl),
});
