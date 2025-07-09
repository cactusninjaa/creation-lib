/**
 * Volume conversions between metric and imperial units.
 *
 * All functions take a number and return a number.
 */

// Constants
const LITERS_PER_CUBIC_METER = 1000;
const LITERS_PER_CUBIC_CENTIMETER = 0.001;

// US customary
const LITERS_PER_GALLON_US = 3.78541;
const LITERS_PER_QUART_US = LITERS_PER_GALLON_US / 4;
const LITERS_PER_PINT_US = LITERS_PER_QUART_US / 2;
const LITERS_PER_CUP_US = LITERS_PER_GALLON_US / 16;
const LITERS_PER_OUNCE_US = LITERS_PER_GALLON_US / 128;

// Imperial (UK)
const LITERS_PER_GALLON_UK = 4.54609;
const LITERS_PER_QUART_UK = LITERS_PER_GALLON_UK / 4;
const LITERS_PER_PINT_UK = LITERS_PER_QUART_UK / 2;
const LITERS_PER_OUNCE_UK = LITERS_PER_GALLON_UK / 160;

/** Metric conversions */
export function litersToMilliliters(l: number): number {
    return l * 1000;
}

export function millilitersToLiters(ml: number): number {
    return ml / 1000;
}

export function litersToCubicMeters(l: number): number {
    return l / LITERS_PER_CUBIC_METER;
}

export function cubicMetersToLiters(m3: number): number {
  return m3 * LITERS_PER_CUBIC_METER;
}

export function litersToCubicCentimeters(l: number): number {
    return l / LITERS_PER_CUBIC_CENTIMETER;
}

export function cubicCentimetersToLiters(cm3: number): number {
    return cm3 * LITERS_PER_CUBIC_CENTIMETER;
}

/** US customary conversions */
export function litersToGallonsUS(l: number): number {
    return l / LITERS_PER_GALLON_US;
}

export function gallonsUSToLiters(gal: number): number {
    return gal * LITERS_PER_GALLON_US;
}

export function litersToQuartsUS(l: number): number {
    return l / LITERS_PER_QUART_US;
}

export function quartsUSToLiters(qt: number): number {
    return qt * LITERS_PER_QUART_US;
}

export function litersToPintsUS(l: number): number {
    return l / LITERS_PER_PINT_US;
}

export function pintsUSToLiters(pt: number): number {
    return pt * LITERS_PER_PINT_US;
}

export function litersToCupsUS(l: number): number {
    return l / LITERS_PER_CUP_US;
}

export function cupsUSToLiters(cup: number): number {
    return cup * LITERS_PER_CUP_US;
}

export function litersToOuncesUS(l: number): number {
    return l / LITERS_PER_OUNCE_US;
}

export function ouncesUSToLiters(oz: number): number {
    return oz * LITERS_PER_OUNCE_US;
}

/** Imperial (UK) conversions */
export function litersToGallonsUK(l: number): number {
    return l / LITERS_PER_GALLON_UK;
}

export function gallonsUKToLiters(gal: number): number {
    return gal * LITERS_PER_GALLON_UK;
}

export function litersToQuartsUK(l: number): number {
    return l / LITERS_PER_QUART_UK;
}

export function quartsUKToLiters(qt: number): number {
    return qt * LITERS_PER_QUART_UK;
}

export function litersToPintsUK(l: number): number {
    return l / LITERS_PER_PINT_UK;
}

export function pintsUKToLiters(pt: number): number {
    return pt * LITERS_PER_PINT_UK;
}

export function litersToOuncesUK(l: number): number {
    return l / LITERS_PER_OUNCE_UK;
}

export function ouncesUKToLiters(oz: number): number {
    return oz * LITERS_PER_OUNCE_UK;
}
