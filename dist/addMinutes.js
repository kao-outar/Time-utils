/**
 * Ajoute un nombre de minutes à une date
 * @param date - Date de base
 * @param minutes - Nombre de minutes à ajouter (peut être négatif)
 * @returns Nouvelle date avec les minutes ajoutées
 */
export function addMinutes(date, minutes) {
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
//# sourceMappingURL=addMinutes.js.map