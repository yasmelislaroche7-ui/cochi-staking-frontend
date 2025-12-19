import { createPublicClient, createWalletClient, custom, http } from "viem"
import { worldchain } from "viem/chains"

export const publicClient = createPublicClient({
  chain: worldchain,
  transport: http(),
})

export const walletClient = createWalletClient({
  chain: worldchain,
  transport: custom(window.ethereum),
})
