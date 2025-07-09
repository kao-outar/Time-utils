import { describe, it, expect } from 'vitest';
import { isValidDate, toDate, normalizeDate, padZero, TIME_CONSTANTS } from '../src/utils';

describe('utils', () => {
  it('validates dates', () => {
    expect(isValidDate(new Date())).toBe(true);
    expect(isValidDate('invalid')).toBe(false);
  });

  it('converts to date', () => {
    expect(toDate('2024-01-01')).toBeInstanceOf(Date);
    expect(toDate('invalid')).toBeNull();
  });

  it('normalizes date', () => {
    const d = new Date('2024-01-01T12:34:56');
    const normalized = normalizeDate(d);
    expect(normalized.getHours()).toBe(0);
  });

  it('pads zeros', () => {
    expect(padZero(5)).toBe('05');
    expect(padZero(12)).toBe('12');
  });

  it('has correct constants', () => {
    expect(TIME_CONSTANTS.MILLISECONDS_IN_DAY).toBe(86400000);
  });
});
