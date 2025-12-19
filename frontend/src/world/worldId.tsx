import { createContext, useContext, useState } from "react";
import { IDKitWidget, VerificationLevel } from "@worldcoin/idkit";
import { WORLD_ID } from "../config/world";

type WorldIdCtx = {
  verified: boolean;
};

const WorldIdContext = createContext<WorldIdCtx>({ verified: false });

export const WorldIdProvider = ({ children }: { children: React.ReactNode }) => {
  const [verified, setVerified] = useState(
    localStorage.getItem("worldid_verified") === "true"
  );

  return (
    <WorldIdContext.Provider value={{ verified }}>
      {!verified && (
        <IDKitWidget
          app_id={WORLD_ID.appId}
          action={WORLD_ID.actionId}
          verification_level={VerificationLevel.Orb}
          onSuccess={() => {
            localStorage.setItem("worldid_verified", "true");
            setVerified(true);
          }}
        >
          {({ open }) => (
            <button onClick={open} style={{ padding: 12 }}>
              Verify with World ID
            </button>
          )}
        </IDKitWidget>
      )}
      {children}
    </WorldIdContext.Provider>
  );
};

export const useWorldId = () => useContext(WorldIdContext);
