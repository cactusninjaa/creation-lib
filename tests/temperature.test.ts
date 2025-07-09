import { describe, test, expect } from 'vitest';

import {
    celsiusToKelvin,
    kelvinToCelsius,
    celsiusToFahrenheit,
    fahrenheitToCelsius,
    kelvinToFahrenheit,
    fahrenheitToKelvin,
} from '../src/converters/temperature';

describe('Conversion de températures', () => {
    test('Celsius à Kelvin', () => {
        expect(celsiusToKelvin(0)).toBeCloseTo(273.15);
        expect(celsiusToKelvin(-273.15)).toBeCloseTo(0);
    });

    test('Kelvin à Celsius', () => {
        expect(kelvinToCelsius(273.15)).toBeCloseTo(0);
        expect(kelvinToCelsius(0)).toBeCloseTo(-273.15);
    });

    test('Celsius à Fahrenheit', () => {
        expect(celsiusToFahrenheit(0)).toBeCloseTo(32);
        expect(celsiusToFahrenheit(100)).toBeCloseTo(212);
    });

    test('Fahrenheit à Celsius', () => {
        expect(fahrenheitToCelsius(32)).toBeCloseTo(0);
        expect(fahrenheitToCelsius(212)).toBeCloseTo(100);
    });

    test('Kelvin à Fahrenheit', () => {
        expect(kelvinToFahrenheit(273.15)).toBeCloseTo(32);
        expect(kelvinToFahrenheit(0)).toBeCloseTo(-459.67);
    });

    test('Fahrenheit à Kelvin', () => {
        expect(fahrenheitToKelvin(32)).toBeCloseTo(273.15);
        expect(fahrenheitToKelvin(-459.67)).toBeCloseTo(0);
    });
});