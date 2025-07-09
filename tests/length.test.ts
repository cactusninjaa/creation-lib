import { describe, it, expect } from 'vitest';
import { 
  metersToFeet, feetToMeters, 
  kilometersToMiles, milesToKilometers, 
  yardsToMeters, metersToYards,
  yardsToFeet, feetToYards,
  kilometersToYards, yardsToKilometers ,
  kilometersToFeet, feetToKilometers
} from '../src/converters/length';

describe('feet and meters', () => {
  it('should convert meters to feet', () => {
    expect(metersToFeet(1)).toBeCloseTo(3.28084);
    expect(metersToFeet(3.20)).toBeCloseTo(10.499);
    expect(metersToFeet(0)).toBeCloseTo(0);
  });

  it('should convert meters to feet', () => {
    expect(feetToMeters(3.28084)).toBeCloseTo(1);
    expect(feetToMeters(10.499)).toBeCloseTo(3.20);
    expect(feetToMeters(0)).toBeCloseTo(0);
  })
});

describe('kilometers and miles', () => {
  it('should convert kilometers to miles', () => {
    expect(kilometersToMiles(1)).toBeCloseTo(0.621371);
    expect(kilometersToMiles(5)).toBeCloseTo(3.10686);
    expect(kilometersToMiles(0)).toBeCloseTo(0);
  });

  it('should convert miles to kilometers', () => {
    expect(milesToKilometers(0.621371)).toBeCloseTo(1);
    expect(milesToKilometers(3.10686)).toBeCloseTo(5);
    expect(milesToKilometers(0)).toBeCloseTo(0);
  });
});


describe('yards and meters', () => {
  it('should convert yards to meters', () => {
    expect(yardsToMeters(1)).toBeCloseTo(0.9144);
    expect(yardsToMeters(5)).toBeCloseTo(4.572);
    expect(yardsToMeters(0)).toBeCloseTo(0);
  });

  it('should convert meters to yards', () => {
    expect(metersToYards(0.9144)).toBeCloseTo(1);
    expect(metersToYards(4.572)).toBeCloseTo(5);
    expect(metersToYards(0)).toBeCloseTo(0);
  });
});


describe('yards and feet', () => {
  it('should convert yards to feet', () => {
    expect(yardsToFeet(1)).toBeCloseTo(3);
    expect(yardsToFeet(5)).toBeCloseTo(15);
    expect(yardsToFeet(0)).toBeCloseTo(0);
  });

  it('should convert feet to yards', () => {
    expect(feetToYards(3)).toBeCloseTo(1);
    expect(feetToYards(15)).toBeCloseTo(5);
    expect(feetToYards(0)).toBeCloseTo(0);
  });
});

describe('kilometers and yards', () => {
  it('should convert kilometers to yards', () => {
    expect(kilometersToYards(1)).toBeCloseTo(1093.61);
    expect(kilometersToYards(5)).toBeCloseTo(5468.05);
    expect(kilometersToYards(0)).toBeCloseTo(0);
  });

  it('should convert yards to kilometers', () => {
    expect(yardsToKilometers(1093.61)).toBeCloseTo(1);
    expect(yardsToKilometers(5468.05)).toBeCloseTo(5);
    expect(yardsToKilometers(0)).toBeCloseTo(0);
  });
});

describe('kilometers and feet', () => {
  it('should convert kilometers to feet', () => {
    expect(kilometersToFeet(1)).toBeCloseTo(3280.84);
    expect(kilometersToFeet(5)).toBeCloseTo(16404.2);
    expect(kilometersToFeet(0)).toBeCloseTo(0);
  });

  it('should convert feet to kilometers', () => {
    expect(feetToKilometers(3280.84)).toBeCloseTo(1);
    expect(feetToKilometers(16404.2)).toBeCloseTo(5);
    expect(feetToKilometers(0)).toBeCloseTo(0);
  });
});


  