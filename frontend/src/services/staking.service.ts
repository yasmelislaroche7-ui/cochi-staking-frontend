import { ethers } from "ethers";
import ABI from "../abi/MatrixStaking.json";
import { CONTRACTS } from "../config/contracts";

export const getStakingContract = (signer: ethers.Signer) =>
  new ethers.Contract(CONTRACTS.STAKING, ABI, signer);

export const stake = async (signer: ethers.Signer, amount: bigint) => {
  const c = getStakingContract(signer);
  const tx = await c.stake(amount);
  return tx.wait();
};

export const unstake = async (signer: ethers.Signer, amount: bigint) => {
  const c = getStakingContract(signer);
  const tx = await c.unstake(amount);
  return tx.wait();
};

export const claim = async (signer: ethers.Signer) => {
  const c = getStakingContract(signer);
  const tx = await c.claim();
  return tx.wait();
};

export const readUserInfo = async (
  provider: ethers.Provider,
  user: string
) => {
  const c = new ethers.Contract(CONTRACTS.STAKING, ABI, provider);
  return c.getUserInfo(user);
};
