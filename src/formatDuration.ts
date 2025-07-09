/**
 * Formate une durée en secondes vers un format lisible
 * @param seconds - Nombre de secondes à formater
 * @returns Chaîne formatée comme "1h 2min 30s"
 */
export function formatDuration(seconds: number): string {
  if (seconds < 0) {
    throw new Error('La durée ne peut pas être négative');
  }

  if (seconds === 0) {
    return '0s';
  }

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const parts: string[] = [];

  if (hours > 0) {
    parts.push(`${hours}h`);
  }

  if (minutes > 0) {
    parts.push(`${minutes}min`);
  }

  if (remainingSeconds > 0) {
    parts.push(`${remainingSeconds}s`);
  }

  return parts.join(' ');
} 