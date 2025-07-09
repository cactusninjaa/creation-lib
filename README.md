# Librairie de Conversion et Utilitaires

Cette librairie propose plusieurs outils et fonctionnalités, notamment des conversions de températures, longueurs, volumes et poids.

## Fonctionnalités

### 1. Conversion de Températures
- Conversion entre **Celsius**, **Kelvin** et **Fahrenheit** dans les deux sens.

### 2. Conversion de Longueurs
- Conversion entre **mètres** et **pieds**.
- Conversion entre **kilomètres** et **miles**.
- Conversion entre **yards**, **mètres** et **pieds**.

### 3. Conversion de Volumes
- Conversion entre **litres** et **gallons**.
- Conversion entre **millilitres** et **onces liquides**.
- Conversion entre **mètres cubes** et **pieds cubes**.

### 4. Conversion de Poids
- Conversion entre **kilogrammes** et **livres**.
- Conversion entre **grammes** et **onces**.
- Conversion entre **tonnes métriques** et **tonnes impériales**.

## Installation

Assurez-vous d'avoir **Node.js** et **npm** installés sur votre machine.

1. Clonez le dépôt ou mettez-le à jour avec `git pull` :
   ```bash
   git pull
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

## Utilisation

Importez les fonctions nécessaires dans votre projet TypeScript ou JavaScript :

### Exemple : Conversion de Températures
```typescript
import {
    celsiusToKelvin,
    kelvinToCelsius,
    celsiusToFahrenheit,
    fahrenheitToCelsius,
} from './src/converters/temperature';

console.log(celsiusToKelvin(0)); // 273.15
console.log(fahrenheitToCelsius(32)); // 0
```

### Exemple : Conversion de Longueurs
```typescript
import {
    metersToFeet,
    feetToMeters,
    kilometersToMiles,
    milesToKilometers,
} from './src/converters/length';

console.log(metersToFeet(1)); // 3.28084
console.log(kilometersToMiles(5)); // 3.106855
```

### Exemple : Conversion de Volumes
```typescript
import {
    litersToGallons,
    gallonsToLiters,
} from './src/converters/volume';

console.log(litersToGallons(1)); // Exemple : 0.264172
console.log(gallonsToLiters(1)); // Exemple : 3.78541
```

### Exemple : Conversion de Poids
```typescript
import {
    kilogramsToPounds,
    poundsToKilograms,
} from './src/converters/weight';

console.log(kilogramsToPounds(1)); // Exemple : 2.20462
console.log(poundsToKilograms(1)); // Exemple : 0.453592
```

## Tests

Les tests sont écrits avec **Vitest**. Pour exécuter les tests, utilisez la commande suivante :

```bash
npm test
```

## Structure du Projet

```
/src
  /converters
    temperature.ts       # Fonctions de conversion de températures
    length.ts            # Fonctions de conversion de longueurs
    volume.ts            # Fonctions de conversion de volumes
    weight.ts            # Fonctions de conversion de poids
/tests
  temperature.test.ts    # Tests unitaires pour les conversions de températures
  length.test.ts         # Tests unitaires pour les conversions de longueurs
  volume.test.ts         # Tests unitaires pour les conversions de volumes
  weight.test.ts         # Tests unitaires pour les conversions de poids
```

## Contributions

Les contributions sont les bienvenues ! Veuillez soumettre une pull request ou ouvrir une issue pour signaler un problème.

## Licence

Ce projet est sous licence [MIT](LICENSE).




