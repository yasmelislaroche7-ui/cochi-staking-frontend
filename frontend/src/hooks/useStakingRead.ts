import { useEffect, useState } from "react"
import { publicClient } from "../world/wallet"
import stakingAbi from "../abi/MatrixStaking.json"
import { CONTRACTS } from "../config/contracts"
import { REFRESH_INTERVAL } from "../config/constants"

export function useStakingRead(address?: `0x${string}`) {
  const [data, setData] = useState<any>({})

  useEffect(() => {
    if (!address) return

    const load = async () => {
      const [user, info, apr] = await Promise.all([
        publicClient.readContract({
          address: CONTRACTS.STAKING,
          abi: stakingAbi,
          functionName: "getUserInfo",
          args: [address],
        }),
        publicClient.readContract({
          address: CONTRACTS.STAKING,
          abi: stakingAbi,
          functionName: "getContractInfo",
        }),
        publicClient.readContract({
          address: CONTRACTS.STAKING,
          abi: stakingAbi,
          functionName: "apr",
        }),
      ])

      setData({ user, info, apr })
    }

    load()
    const i = setInterval(load, REFRESH_INTERVAL)
    return () => clearInterval(i)
  }, [address])

  return data
}
