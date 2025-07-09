/**
 * Weight conversions between metric and imperial units.
 *
 * All functions take a number and return a number.
 */

// Constants
const GRAMS_PER_KILOGRAM = 1000;

// US/UK pounds & ounces (même valeur dans les 2 systèmes)
const KILOGRAMS_PER_POUND = 0.45359237;
const GRAMS_PER_POUND = KILOGRAMS_PER_POUND * GRAMS_PER_KILOGRAM;
const GRAMS_PER_OUNCE = GRAMS_PER_POUND / 16;
const KILOGRAMS_PER_OUNCE = KILOGRAMS_PER_POUND / 16;

/** Metric conversions */
export function kilogramsToGrams(kg: number): number {
  return kg * GRAMS_PER_KILOGRAM;
}

export function gramsToKilograms(g: number): number {
  return g / GRAMS_PER_KILOGRAM;
}

/** Metric ↔ Pounds */
export function kilogramsToPounds(kg: number): number {
  return kg / KILOGRAMS_PER_POUND;
}

export function poundsToKilograms(lb: number): number {
  return lb * KILOGRAMS_PER_POUND;
}

export function gramsToPounds(g: number): number {
  return g / GRAMS_PER_POUND;
}

export function poundsToGrams(lb: number): number {
  return lb * GRAMS_PER_POUND;
}

/** Metric ↔ Ounces */
export function kilogramsToOunces(kg: number): number {
  return kg / KILOGRAMS_PER_OUNCE;
}

export function ouncesToKilograms(oz: number): number {
  return oz * KILOGRAMS_PER_OUNCE;
}

export function gramsToOunces(g: number): number {
  return g / GRAMS_PER_OUNCE;
}

export function ouncesToGrams(oz: number): number {
  return oz * GRAMS_PER_OUNCE;
}
