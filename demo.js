// Copie des fonctions en JavaScript pur pour la démo

function formatDuration(seconds) {
  if (seconds < 0) {
    throw new Error('La durée ne peut pas être négative');
  }

  if (seconds === 0) {
    return '0s';
  }

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const parts = [];

  if (hours > 0) {
    parts.push(`${hours}h`);
  }

  if (minutes > 0) {
    parts.push(`${minutes}min`);
  }

  if (remainingSeconds > 0) {
    parts.push(`${remainingSeconds}s`);
  }

  return parts.join(' ');
}

function addMinutes(date, minutes) {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error('Date invalide fournie');
  }

  if (!Number.isFinite(minutes)) {
    throw new Error('Le nombre de minutes doit être un nombre fini');
  }

  const result = new Date(date.getTime());
  const millisecondsToAdd = minutes * 60 * 1000;
  result.setTime(result.getTime() + millisecondsToAdd);

  return result;
}

// Utilitaires
function padZero(value) {
  return value.toString().padStart(2, '0');
}

function isValidDate(value) {
  return value instanceof Date && !isNaN(value.getTime());
}

function toDate(value) {
  if (value instanceof Date && isValidDate(value)) return value;

  const parsed = new Date(value);
  return isValidDate(parsed) ? parsed : null;
}

function normalizeDate(date) {
  const clone = new Date(date);
  clone.setHours(0, 0, 0, 0);
  return clone;
}

const TIME_CONSTANTS = {
  MILLISECONDS_IN_SECOND: 1000,
  SECONDS_IN_MINUTE: 60,
  MINUTES_IN_HOUR: 60,
  HOURS_IN_DAY: 24,
  MILLISECONDS_IN_DAY: 1000 * 60 * 60 * 24
};

function formatDate(date, format) {
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

function isPast(date) {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error('Invalid date provided');
  }

  return date.getTime() < new Date().getTime();
}

function diffInDays(date1, date2) {
  if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
    throw new Error('Both parameters must be Date objects');
  }

  if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
    throw new Error('Invalid date provided');
  }

  const diff = date1.getTime() - date2.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

function parseTime(timeString) {
  if (typeof timeString !== 'string') {
    throw new Error('La chaîne de temps doit être une string');
  }

  const match = timeString.match(/^(\d{1,2}):(\d{2})$/);
  if (!match) {
    throw new Error('Format de temps invalide. Format attendu: HH:MM');
  }

  const hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);

  if (hours < 0 || hours > 23) {
    throw new Error('Les heures doivent être entre 0 et 23');
  }

  if (minutes < 0 || minutes > 59) {
    throw new Error('Les minutes doivent être entre 0 et 59');
  }

  return { hours, minutes };
}

// Demonstration de formatDuration
console.log('=== Demonstration formatDuration ===');
console.log('formatDuration(3750) ->', formatDuration(3750));
console.log('formatDuration(0) ->', formatDuration(0));
console.log('formatDuration(45) ->', formatDuration(45));
console.log('formatDuration(300) ->', formatDuration(300));
console.log('formatDuration(7200) ->', formatDuration(7200));
console.log('formatDuration(3661) ->', formatDuration(3661));

// Demonstration de addMinutes
console.log('\n=== Demonstration addMinutes ===');
const baseDate = new Date('2024-01-01T10:00:00.000Z');
console.log('Date de base:', baseDate.toISOString());

const result1 = addMinutes(baseDate, 5);
console.log('addMinutes(date, 5) ->', result1.toISOString());

const result2 = addMinutes(baseDate, -15);
console.log('addMinutes(date, -15) ->', result2.toISOString());

const result3 = addMinutes(baseDate, 1440); // 24h
console.log('addMinutes(date, 1440) ->', result3.toISOString());

const result4 = addMinutes(baseDate, 1.5); // 1.5 minutes
console.log('addMinutes(date, 1.5) ->', result4.toISOString());

// Demonstration de formatDate
console.log('\n=== Demonstration formatDate ===');
const testDate = new Date('2024-01-15T14:30:00.000Z');
console.log('formatDate(2024-01-15, "DD/MM/YYYY") ->', formatDate(testDate, 'DD/MM/YYYY'));
console.log('formatDate(2024-01-15, "YYYY-MM-DD") ->', formatDate(testDate, 'YYYY-MM-DD'));
console.log('formatDate(2024-01-15, "DD MMM YYYY") ->', formatDate(testDate, 'DD MMM YYYY'));

// Demonstration de isPast
console.log('\n=== Demonstration isPast ===');
const pastDate = new Date('2023-01-01');
const futureDate = new Date('2025-01-01');
console.log('isPast(2023-01-01) ->', isPast(pastDate));
console.log('isPast(2025-01-01) ->', isPast(futureDate));

// Demonstration de diffInDays
console.log('\n=== Demonstration diffInDays ===');
const date1 = new Date('2024-01-15');
const date2 = new Date('2024-01-10');
console.log('diffInDays(2024-01-15, 2024-01-10) ->', diffInDays(date1, date2));
console.log('diffInDays(2024-01-10, 2024-01-15) ->', diffInDays(date2, date1));

// Demonstration des utilitaires
console.log('\n=== Demonstration des utilitaires ===');
console.log('padZero(5) ->', padZero(5));
console.log('padZero(15) ->', padZero(15));
console.log('isValidDate(new Date()) ->', isValidDate(new Date()));
console.log('isValidDate("invalid") ->', isValidDate("invalid"));
console.log('toDate("2024-01-15") ->', toDate("2024-01-15"));
console.log('toDate("invalid") ->', toDate("invalid"));

const dateToNormalize = new Date('2024-01-15T14:30:00.000Z');
console.log('normalizeDate(2024-01-15T14:30:00.000Z) ->', normalizeDate(dateToNormalize));
console.log('TIME_CONSTANTS.MILLISECONDS_IN_DAY ->', TIME_CONSTANTS.MILLISECONDS_IN_DAY);

// Demonstration de parseTime
console.log('\n=== Demonstration parseTime ===');
console.log('parseTime("14:30") ->', parseTime("14:30"));
console.log('parseTime("09:05") ->', parseTime("09:05"));

console.log('\nTOUTES LES FONCTIONS MARCHENT !');