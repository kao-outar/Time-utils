import { describe, it, expect } from 'vitest';
import { isPast } from '../src/isPast';

describe('isPast', () => {
  it('returns true for past dates', () => {
    const past = new Date(Date.now() - 100000);
    expect(isPast(past)).toBe(true);
  });

  it('returns false for future dates', () => {
    const future = new Date(Date.now() + 100000);
    expect(isPast(future)).toBe(false);
  });

  it('throws for invalid date', () => {
    expect(() => isPast(new Date('invalid'))).toThrow();
  });
});
