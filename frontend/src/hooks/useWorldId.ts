import { useEffect, useState } from "react"

/**
 * World ID verification state
 * - verified: true cuando el usuario ya pasó World ID
 * - proof: se puede guardar si luego quieres enviarlo a backend
 *
 * La verificación es SOLO UNA VEZ por sesión (localStorage)
 */
const STORAGE_KEY = "worldid_verified"

export function useWorldId() {
  const [verified, setVerified] = useState<boolean>(false)
  const [proof, setProof] = useState<any>(null)

  // Al cargar la app, revisa si ya fue verificado
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === "true") {
      setVerified(true)
    }
  }, [])

  /**
   * Llamar esto cuando World ID termina OK
   */
  const onWorldIdSuccess = (proofData?: any) => {
    setVerified(true)
    setProof(proofData ?? null)
    localStorage.setItem(STORAGE_KEY, "true")
  }

  /**
   * Permite resetear manualmente (solo si tú quieres)
   */
  const resetWorldId = () => {
    setVerified(false)
    setProof(null)
    localStorage.removeItem(STORAGE_KEY)
  }

  return {
    verified,
    proof,
    onWorldIdSuccess,
    resetWorldId,
  }
}
