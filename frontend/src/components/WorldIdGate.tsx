import { useWorldId } from "../hooks/useWorldId"

type Props = {
  children: React.ReactNode
}

export default function WorldIdGate({ children }: Props) {
  const { verified } = useWorldId()

  if (!verified) {
    return (
      <div style={{ opacity: 0.6 }}>
        <p>Human verification required</p>
      </div>
    )
  }

  return <>{children}</>
}
