import { describe, it, expect } from 'vitest';
import * as weight from './weight';

describe('Weight conversions', () => {
  describe('Metric ↔ Metric', () => {
    it('kilograms ↔ grams', () => {
      expect(weight.kilogramsToGrams(1)).toBe(1000);
      expect(weight.gramsToKilograms(500)).toBe(0.5);
    });
  });

  describe('Metric ↔ Pounds', () => {
    it('kilograms ↔ pounds', () => {
      expect(weight.kilogramsToPounds(1)).toBeCloseTo(2.20462, 5);
      expect(weight.poundsToKilograms(2.20462)).toBeCloseTo(1, 5);
    });

    it('grams ↔ pounds', () => {
      expect(weight.gramsToPounds(1000)).toBeCloseTo(2.20462, 5);
      expect(weight.poundsToGrams(2.20462)).toBeCloseTo(1000, 5);
    });
  });

  describe('Metric ↔ Ounces', () => {
    it('kilograms ↔ ounces', () => {
      expect(weight.kilogramsToOunces(1)).toBeCloseTo(35.274, 3);
      expect(weight.ouncesToKilograms(35.274)).toBeCloseTo(1, 3);
    });

    it('grams ↔ ounces', () => {
      expect(weight.gramsToOunces(1000)).toBeCloseTo(35.274, 3);
      expect(weight.ouncesToGrams(35.274)).toBeCloseTo(1000, 3);
    });
  });
});
