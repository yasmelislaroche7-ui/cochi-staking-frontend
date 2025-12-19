import { IDKitWidget } from "@worldcoin/idkit"

export function WorldIdGate({ onSuccess }: { onSuccess: () => void }) {
  return (
    <IDKitWidget
      app_id="app_f84357b08826b22ace9ea93d03aef932"
      action="stake"
      onSuccess={onSuccess}
      verification_level="orb"
    >
      {({ open }) => (
        <button onClick={open} className="btn">
          Verify with World ID
        </button>
      )}
    </IDKitWidget>
  )
}
