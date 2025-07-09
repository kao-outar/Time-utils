import { describe, it, expect } from 'vitest';
import { formatDate } from '../src/formatDate';

describe('formatDate', () => {
  const date = new Date('2024-01-15');

  it('formats DD/MM/YYYY', () => {
    expect(formatDate(date, 'DD/MM/YYYY')).toBe('15/01/2024');
  });

  it('formats YYYY-MM-DD', () => {
    expect(formatDate(date, 'YYYY-MM-DD')).toBe('2024-01-15');
  });

  it('throws on invalid input', () => {
    expect(() => formatDate('invalid' as any, 'DD/MM/YYYY')).toThrow();
  });
});
