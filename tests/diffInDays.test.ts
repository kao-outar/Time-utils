import { describe, it, expect } from 'vitest';
import { diffInDays } from '../src/diffInDays';

describe('diffInDays', () => {
  it('returns correct difference', () => {
    expect(diffInDays(new Date('2024-01-05'), new Date('2024-01-01'))).toBe(4);
  });

  it('returns negative for date1 < date2', () => {
    expect(diffInDays(new Date('2024-01-01'), new Date('2024-01-05'))).toBe(-4);
  });

  it('throws on invalid dates', () => {
    expect(() => diffInDays('invalid' as any, new Date())).toThrow();
  });
});
