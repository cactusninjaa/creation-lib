import { describe, it, expect } from 'vitest';
import * as volume from '../src/converters/volume';

describe('Volume conversions', () => {
  describe('Metric ↔ Metric', () => {
    it('liters ↔ milliliters', () => {
      expect(volume.litersToMilliliters(1)).toBe(1000);
      expect(volume.millilitersToLiters(500)).toBe(0.5);
    });

    it('liters ↔ cubic meters', () => {
      expect(volume.litersToCubicMeters(1000)).toBe(1);
      expect(volume.cubicMetersToLiters(0.5)).toBe(500);
    });

    it('liters ↔ cubic centimeters', () => {
      expect(volume.litersToCubicCentimeters(1)).toBe(1000);
      expect(volume.cubicCentimetersToLiters(250)).toBe(0.25);
    });
  });

  describe('Metric ↔ US customary', () => {
    it('liters ↔ gallons US', () => {
      expect(volume.litersToGallonsUS(3.78541)).toBeCloseTo(1, 5);
      expect(volume.gallonsUSToLiters(2)).toBeCloseTo(7.57082, 5);
    });

    it('liters ↔ quarts US', () => {
      expect(volume.litersToQuartsUS(0.946353)).toBeCloseTo(1, 5);
      expect(volume.quartsUSToLiters(2)).toBeCloseTo(1.892706, 5);
    });

    it('liters ↔ pints US', () => {
      expect(volume.litersToPintsUS(0.473176)).toBeCloseTo(1, 5);
      expect(volume.pintsUSToLiters(2)).toBeCloseTo(0.946353, 5);
    });

    it('liters ↔ cups US', () => {
      expect(volume.litersToCupsUS(0.236588)).toBeCloseTo(1, 5);
      expect(volume.cupsUSToLiters(4)).toBeCloseTo(0.946353, 5);
    });

    it('liters ↔ ounces US', () => {
      expect(volume.litersToOuncesUS(0.0295735)).toBeCloseTo(1, 5);
      expect(volume.ouncesUSToLiters(16)).toBeCloseTo(0.473176, 5);
    });
  });

  describe('Metric ↔ UK imperial', () => {
    it('liters ↔ gallons UK', () => {
      expect(volume.litersToGallonsUK(4.54609)).toBeCloseTo(1, 5);
      expect(volume.gallonsUKToLiters(2)).toBeCloseTo(9.09218, 5);
    });

    it('liters ↔ quarts UK', () => {
      expect(volume.litersToQuartsUK(1.1365225)).toBeCloseTo(1, 5);
      expect(volume.quartsUKToLiters(2)).toBeCloseTo(2.273045, 5);
    });

    it('liters ↔ pints UK', () => {
      expect(volume.litersToPintsUK(0.568261)).toBeCloseTo(1, 5);
      expect(volume.pintsUKToLiters(2)).toBeCloseTo(1.136522, 5);
    });

    it('liters ↔ ounces UK', () => {
      expect(volume.litersToOuncesUK(0.0284131)).toBeCloseTo(1, 5);
      expect(volume.ouncesUKToLiters(20)).toBeCloseTo(0.568262, 5);
    });
  });
});
