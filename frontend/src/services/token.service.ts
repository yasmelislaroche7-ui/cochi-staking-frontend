import { ethers } from "ethers";
import ERC20 from "../abi/ERC20.json";
import { CONTRACTS } from "../config/contracts";

export const getTokenContract = (signer: ethers.Signer) =>
  new ethers.Contract(CONTRACTS.TOKEN, ERC20, signer);

export const approveToken = async (
  signer: ethers.Signer,
  amount: bigint
) => {
  const token = getTokenContract(signer);
  const tx = await token.approve(CONTRACTS.STAKING, amount);
  return tx.wait();
};
