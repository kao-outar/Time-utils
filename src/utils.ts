export function padZero(value: number): string {
  return value.toString().padStart(2, '0');
}

export function isValidDate(value: any): boolean {
  return value instanceof Date && !isNaN(value.getTime());
}

export function toDate(value: any): Date | null {
  if (value instanceof Date && isValidDate(value)) return value;

  const parsed = new Date(value);
  return isValidDate(parsed) ? parsed : null;
}

export function normalizeDate(date: Date): Date {
  const clone = new Date(date);
  clone.setHours(0, 0, 0, 0);
  return clone;
}

export const TIME_CONSTANTS = {
  MILLISECONDS_IN_SECOND: 1000,
  SECONDS_IN_MINUTE: 60,
  MINUTES_IN_HOUR: 60,
  HOURS_IN_DAY: 24,
  MILLISECONDS_IN_DAY: 1000 * 60 * 60 * 24
} as const;
