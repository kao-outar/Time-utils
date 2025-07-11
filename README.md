# time-utils 🕒

Une librairie TypeScript simple et efficace pour manipuler le temps, les dates et les durées.

---

## 🚀 Installation

Pour utiliser cette librairie dans votre projet :

```bash
npm install time-utils # (Une fois que le paquet sera publié sur NPM)
```

---

## ✨ Fonctionnalités

Cette librairie fournit des fonctions utilitaires pour résoudre des problèmes courants de manipulation du temps.

### `formatDuration(seconds)`

**Objectif :** Convertir une durée brute en secondes (ex: `3750`) en un format lisible par un humain (ex: `"1h 2min 30s"`).

Cette fonction évite de devoir réécrire manuellement des calculs de temps complexes et sujets aux erreurs.

**Exemples d'utilisation :**
- Afficher la durée d'une vidéo ou d'un podcast.
- Montrer le temps écoulé dans un chronomètre.
- Présenter des rapports de performance ("Le traitement a duré `formatDuration(134)`").

**Utilisation :**
```typescript
import { formatDuration } from 'time-utils';

console.log(formatDuration(3750));
// Output: "1h 2min 30s"

console.log(formatDuration(45));
// Output: "45s"
```

### `addMinutes(date, minutes)`

**Objectif :** Ajouter (ou soustraire) des minutes à une date sans se soucier des complexités comme les changements de jour, de mois ou d'année.

**Exemples d'utilisation :**
- Calculer l'heure de fin d'un événement dans un calendrier.
- Programmer des rappels et notifications ("Me rappeler dans 15 minutes").
- Définir la date d'expiration d'un jeton de sécurité.

**Utilisation :**
```typescript
import { addMinutes } from 'time-utils';

const maintenant = new Date();
const heureDeFin = addMinutes(maintenant, 45);

console.log(`La réunion se terminera à ${heureDeFin.toLocaleTimeString()}`);
```

### `diffInDays(date1, date2)`

**Objectif :** Calculer le nombre de jours entiers entre deux dates.

**Exemples d'utilisation :**
- Savoir combien de jours il reste avant un événement.
- Calculer l'âge en jours.
- Générer des rapports de délais ou de rétention.

**Utilisation :**
```typescript
import { diffInDays } from 'time-utils';

const joursRestants = diffInDays(new Date('2025-07-20'), new Date('2025-07-11'));
console.log(joursRestants); // Output: 9
```

### `isPast(date)`

**Objectif :** Vérifier si une date donnée est dans le passé par rapport à maintenant.

**Exemples d'utilisation :**
- Désactiver un bouton si la date d’expiration est passée.
- Filtrer les événements terminés.

**Utilisation :**
```typescript
import { isPast } from 'time-utils';

console.log(isPast(new Date('2000-01-01'))); // Output: true
```

### `formatDate(date, format?)`

**Objectif :** Formater une date en chaîne lisible, avec un format personnalisable (par exemple : `DD/MM/YYYY`, `YYYY-MM-DD`, etc.).

**Exemples d'utilisation :**
- Afficher des dates dans l’interface utilisateur.
- Générer des rapports ou des exports.

**Utilisation :**
```typescript
import { formatDate } from 'time-utils';

console.log(formatDate(new Date('2025-07-11'), 'DD/MM/YYYY')); // Output: "11/07/2025"
```
### `utils`

**Objectif :** Module regroupant des fonctions utilitaires diverses liées au temps et aux dates.

**Fonctions principales :**
- `padZero(value: number)`: Ajoute un zéro devant un nombre si besoin (ex : 5 → "05").
- `isValidDate(value: any)`: Vérifie si la valeur est une date valide.
- `toDate(value: any)`: Convertit une valeur en objet Date si possible, sinon retourne `null`.
- `normalizeDate(date: Date)`: Retourne une copie de la date avec l'heure à minuit (utile pour comparer uniquement les jours).
- `TIME_CONSTANTS`: Constantes utiles pour les conversions de temps (secondes, minutes, heures, jours).

**Exemples d'utilisation :**
```typescript
import { utils } from 'time-utils';

console.log(utils.padZero(7)); // "07"
console.log(utils.isValidDate(new Date())); // true
console.log(utils.toDate("2025-07-11")); // Date object
console.log(utils.normalizeDate(new Date())); // Date à minuit
console.log(utils.TIME_CONSTANTS.SECONDS_IN_MINUTE); // 60
```
---

## 🧪 Tests

Pour lancer la suite de tests et vérifier que tout fonctionne correctement :

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer les tests
npm test
```

---

## 🤝 Contribution

Ce projet est ouvert aux contributions. N'hésitez pas à proposer des améliorations ou à signaler des bugs en ouvrant une issue.

**Auteurs :**
- Kaoutar
- Garance
- Omar