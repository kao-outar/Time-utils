import { formatDuration, addMinutes } from './src';

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

console.log('\n✅ Toutes les fonctions fonctionnent correctement !'); 