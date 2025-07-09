/**
 * Weight conversions between metric and imperial units.
 *
 * All functions take a number and return a number.
 */

// Constants
const GRAMS_PER_KILOGRAM = 1000;

// US/UK pounds & ounces (same in both systems)
const GRAMS_PER_POUND = 453.59237;
const POUNDS_PER_KILOGRAM = 2.20462262185;
const GRAMS_PER_OUNCE = 28.349523125;
const OUNCES_PER_KILOGRAM = 35.27396195;

/** Metric conversions */
export function kilogramsToGrams(kg: number): number {
  return kg * GRAMS_PER_KILOGRAM;
}

export function gramsToKilograms(g: number): number {
  return g / GRAMS_PER_KILOGRAM;
}

/** Metric ↔ Pounds */
export function kilogramsToPounds(kg: number): number {
  return kg * POUNDS_PER_KILOGRAM;
}

export function poundsToKilograms(lb: number): number {
  return lb / POUNDS_PER_KILOGRAM;
}

export function gramsToPounds(g: number): number {
  return g / GRAMS_PER_POUND;
}

export function poundsToGrams(lb: number): number {
  return lb * GRAMS_PER_POUND;
}

/** Metric ↔ Ounces */
export function kilogramsToOunces(kg: number): number {
  return kg * OUNCES_PER_KILOGRAM;
}

export function ouncesToKilograms(oz: number): number {
  return oz / OUNCES_PER_KILOGRAM;
}

export function gramsToOunces(g: number): number {
  return g / GRAMS_PER_OUNCE;
}

export function ouncesToGrams(oz: number): number {
  return oz * GRAMS_PER_OUNCE;
}
