import { describe, it, expect } from 'vitest';
import { formatDuration } from '../src/formatDuration';

describe('formatDuration', () => {
  it('devrait formater correctement l\'exemple donné (3750 secondes)', () => {
    expect(formatDuration(3750)).toBe('1h 2min 30s');
  });

  it('devrait formater 0 seconde', () => {
    expect(formatDuration(0)).toBe('0s');
  });

  it('devrait formater seulement les secondes', () => {
    expect(formatDuration(45)).toBe('45s');
  });

  it('devrait formater seulement les minutes', () => {
    expect(formatDuration(300)).toBe('5min');
  });

  it('devrait formater seulement les heures', () => {
    expect(formatDuration(7200)).toBe('2h');
  });

  it('devrait formater heures et minutes', () => {
    expect(formatDuration(4500)).toBe('1h 15min');
  });

  it('devrait formater minutes et secondes', () => {
    expect(formatDuration(150)).toBe('2min 30s');
  });

  it('devrait formater heures, minutes et secondes', () => {
    expect(formatDuration(3661)).toBe('1h 1min 1s');
  });

  it('devrait gérer des grandes durées', () => {
    expect(formatDuration(36000)).toBe('10h');
    expect(formatDuration(90061)).toBe('25h 1min 1s');
  });

  it('devrait lever une erreur pour des durées négatives', () => {
    expect(() => formatDuration(-1)).toThrow('La durée ne peut pas être négative');
  });

  it('devrait gérer des durées avec décimales (arrondi vers le bas)', () => {
    expect(formatDuration(3661.9)).toBe('1h 1min 1s');
  });
}); 