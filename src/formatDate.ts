import { padZero } from './utils';

/**
 * Formate une date dans le format fourni (ex: 'DD/MM/YYYY')
 */
export function formatDate(date: Date, format: string): string {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error('Invalid date provided');
  }

  if (typeof format !== 'string' || format.trim() === '') {
    throw new Error('Format must be a non-empty string');
  }

  const day = padZero(date.getDate());
  const month = padZero(date.getMonth() + 1);
  const year = date.getFullYear();
  const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                     'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][date.getMonth()];

  return format
    .replace('YYYY', year.toString())
    .replace('MM', month)
    .replace('DD', day)
    .replace('MMM', monthName);
}
