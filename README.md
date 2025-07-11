# time-utils 🕒

[![NPM Version](https://img.shields.io/npm/v/@gualepouce/time-utils)](https://www.npmjs.com/package/@gualepouce/time-utils)
[![Tests](https://img.shields.io/badge/tests-passing-brightgreen)](https://github.com/kao-outar/Time-utils/actions)
[![License](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)

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

---

*Note : D'autres fonctions comme `isPast`, `diffInDays`, `formatDate` seront ajoutées par le reste de l'équipe.*

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