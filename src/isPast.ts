/**
 * Vérifie si une date est antérieure à maintenant
 */
export function isPast(date: Date): boolean {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error('Invalid date provided');
  }

  return date.getTime() < new Date().getTime();
}
