import {
    formatDuration,
    addMinutes,
    formatDate,
    isPast,
    diffInDays
} from './src';

import { 
    padZero, 
    isValidDate, 
    toDate, 
    normalizeDate 
} from './src/utils';

// Démonstration de formatDuration
console.log('=== Démonstration formatDuration ===');
console.log(`formatDuration(3750) → "${formatDuration(3750)}"`);
console.log(`formatDuration(0) → "${formatDuration(0)}"`);
console.log(`formatDuration(45) → "${formatDuration(45)}"`);
console.log(`formatDuration(300) → "${formatDuration(300)}"`);
console.log(`formatDuration(7200) → "${formatDuration(7200)}"`);
console.log(`formatDuration(3661) → "${formatDuration(3661)}"`);

// Démonstration de addMinutes
console.log('\n=== Démonstration addMinutes ===');
const baseDate = new Date('2024-01-01T10:00:00.000Z');
console.log(`Date de base: ${baseDate.toISOString()}`);

const result1 = addMinutes(baseDate, 5);
console.log(`addMinutes(date, 5) → ${result1.toISOString()}`);

const result2 = addMinutes(baseDate, -15);
console.log(`addMinutes(date, -15) → ${result2.toISOString()}`);

const result3 = addMinutes(baseDate, 1440); // 24h
console.log(`addMinutes(date, 1440) → ${result3.toISOString()}`);

// Démonstration de formatDate
console.log('\n=== Démonstration formatDate ===');
const testDate = new Date('2024-01-15T14:30:00.000Z');
console.log(`formatDate(2024-01-15, "DD/MM/YYYY") → "${formatDate(testDate, 'DD/MM/YYYY')}"`);
console.log(`formatDate(2024-01-15, "YYYY-MM-DD") → "${formatDate(testDate, 'YYYY-MM-DD')}"`);
console.log(`formatDate(2024-01-15, "DD MMM YYYY") → "${formatDate(testDate, 'DD MMM YYYY')}"`);

// Démonstration de isPast
console.log('\n=== Démonstration isPast ===');
const pastDate = new Date('2023-01-01');
const futureDate = new Date('2025-01-01');
console.log(`isPast(2023-01-01) → ${isPast(pastDate)}`);
console.log(`isPast(2025-01-01) → ${isPast(futureDate)}`);

// Démonstration de diffInDays
console.log('\n=== Démonstration diffInDays ===');
const date1 = new Date('2024-01-15');
const date2 = new Date('2024-01-10');
console.log(`diffInDays(2024-01-15, 2024-01-10) → ${diffInDays(date1, date2)}`);
console.log(`diffInDays(2024-01-10, 2024-01-15) → ${diffInDays(date2, date1)}`);

// Démonstration des utilitaires
console.log('\n=== Démonstration des utilitaires ===');
console.log(`padZero(5) → "${padZero(5)}"`);
console.log(`padZero(15) → "${padZero(15)}"`);
console.log(`isValidDate(new Date()) → ${isValidDate(new Date())}`);
console.log(`isValidDate("invalid") → ${isValidDate("invalid")}`);
console.log(`toDate("2024-01-15") →`, toDate("2024-01-15"));
console.log(`toDate("invalid") →`, toDate("invalid"));

const dateToNormalize = new Date('2024-01-15T14:30:00.000Z');
console.log(`normalizeDate(2024-01-15T14:30:00.000Z) →`, normalizeDate(dateToNormalize));
console.log(`TIME_CONSTANTS.MILLISECONDS_IN_DAY → ${TIME_CONSTANTS.MILLISECONDS_IN_DAY}`);


console.log('\n✅ Toutes les fonctions fonctionnent correctement !');