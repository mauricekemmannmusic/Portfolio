import { useSyncExternalStore } from "react"

// Minimales Routing über den URL-Hash, z. B. #imprint (funktioniert auf GitHub Pages ohne Server-Konfiguration)
function subscribe(callback: () => void) {
  window.addEventListener("hashchange", callback)
  return () => window.removeEventListener("hashchange", callback)
}

export function useHash() {
  return useSyncExternalStore(subscribe, () => window.location.hash)
}
