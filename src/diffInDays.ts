/**
 * Calcule la différence entre deux dates en jours
 */
export function diffInDays(date1: Date, date2: Date): number {
  if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
    throw new Error('Both parameters must be Date objects');
  }

  if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
    throw new Error('Invalid date provided');
  }

  const diff = date1.getTime() - date2.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
