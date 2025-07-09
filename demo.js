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

console.log('\nTOUTES LES FONCTIONS MARCHENT !'); 