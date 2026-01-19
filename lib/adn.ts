/**
 * Helper pour gérer l'état "ADN complété" dans localStorage
 * Source de vérité simple et non destructive
 */

const ADN_STORAGE_KEY = 'axiom_adn_completed'

/**
 * Vérifie si l'ADN est complété
 * @returns true si l'ADN est complété, false sinon
 */
export function getAdnCompleted(): boolean {
  if (typeof window === 'undefined') {
    return false
  }
  
  try {
    const value = localStorage.getItem(ADN_STORAGE_KEY)
    return value === 'true'
  } catch {
    return false
  }
}

/**
 * Définit l'état de complétion de l'ADN
 * @param value true si l'ADN est complété, false sinon
 */
export function setAdnCompleted(value: boolean): void {
  if (typeof window === 'undefined') {
    return
  }
  
  try {
    if (value) {
      localStorage.setItem(ADN_STORAGE_KEY, 'true')
    } else {
      localStorage.removeItem(ADN_STORAGE_KEY)
    }
  } catch {
    // Silently fail if localStorage is not available
  }
}
