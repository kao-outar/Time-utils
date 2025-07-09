import { describe, it, expect } from 'vitest';
import { addMinutes } from '../src/addMinutes';

describe('addMinutes', () => {
  it('devrait ajouter des minutes à une date', () => {
    const baseDate = new Date('2024-01-01T10:00:00.000Z');
    const result = addMinutes(baseDate, 5);
    const expected = new Date('2024-01-01T10:05:00.000Z');
    
    expect(result.getTime()).toBe(expected.getTime());
    expect(result).not.toBe(baseDate); // Vérifie que c'est une nouvelle instance
  });

  it('devrait soustraire des minutes avec un nombre négatif', () => {
    const baseDate = new Date('2024-01-01T10:30:00.000Z');
    const result = addMinutes(baseDate, -15);
    const expected = new Date('2024-01-01T10:15:00.000Z');
    
    expect(result.getTime()).toBe(expected.getTime());
  });

  it('devrait gérer l\'ajout de 0 minute', () => {
    const baseDate = new Date('2024-01-01T10:00:00.000Z');
    const result = addMinutes(baseDate, 0);
    
    expect(result.getTime()).toBe(baseDate.getTime());
    expect(result).not.toBe(baseDate); // Nouvelle instance même avec 0
  });

  it('devrait gérer les changements d\'heure', () => {
    const baseDate = new Date('2024-01-01T09:45:00.000Z');
    const result = addMinutes(baseDate, 30);
    const expected = new Date('2024-01-01T10:15:00.000Z');
    
    expect(result.getTime()).toBe(expected.getTime());
  });

  it('devrait gérer les changements de jour', () => {
    const baseDate = new Date('2024-01-01T23:45:00.000Z');
    const result = addMinutes(baseDate, 30);
    const expected = new Date('2024-01-02T00:15:00.000Z');
    
    expect(result.getTime()).toBe(expected.getTime());
  });

  it('devrait gérer les changements de mois', () => {
    const baseDate = new Date('2024-01-31T23:45:00.000Z');
    const result = addMinutes(baseDate, 30);
    const expected = new Date('2024-02-01T00:15:00.000Z');
    
    expect(result.getTime()).toBe(expected.getTime());
  });

  it('devrait gérer de grandes quantités de minutes', () => {
    const baseDate = new Date('2024-01-01T00:00:00.000Z');
    const result = addMinutes(baseDate, 1440); // 24h = 1440 minutes
    const expected = new Date('2024-01-02T00:00:00.000Z');
    
    expect(result.getTime()).toBe(expected.getTime());
  });

  it('devrait lever une erreur pour une date invalide', () => {
    const invalidDate = new Date('invalid');
    
    expect(() => addMinutes(invalidDate, 5)).toThrow('Date invalide fournie');
  });

  it('devrait lever une erreur pour un nombre de minutes invalide', () => {
    const baseDate = new Date('2024-01-01T10:00:00.000Z');
    
    expect(() => addMinutes(baseDate, NaN)).toThrow('Le nombre de minutes doit être un nombre fini');
    expect(() => addMinutes(baseDate, Infinity)).toThrow('Le nombre de minutes doit être un nombre fini');
    expect(() => addMinutes(baseDate, -Infinity)).toThrow('Le nombre de minutes doit être un nombre fini');
  });

  it('devrait préserver les millisecondes', () => {
    const baseDate = new Date('2024-01-01T10:00:00.500Z');
    const result = addMinutes(baseDate, 1);
    const expected = new Date('2024-01-01T10:01:00.500Z');
    
    expect(result.getTime()).toBe(expected.getTime());
  });

  it('devrait gérer les minutes décimales', () => {
    const baseDate = new Date('2024-01-01T10:00:00.000Z');
    const result = addMinutes(baseDate, 1.5);
    const expected = new Date('2024-01-01T10:01:30.000Z');
    
    expect(result.getTime()).toBe(expected.getTime());
  });
}); 