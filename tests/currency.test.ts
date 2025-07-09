import { describe, it, expect } from 'vitest';
import { convert } from '../src/converters/currency';

const sampleRates = {
  USD: 1.08,
  GBP: 0.85,
  EUR: 1,
};

describe('Currency conversions with rates', () => {
  it('EUR → USD', () => {
    expect(convert(100, 'EUR', 'USD', sampleRates)).toBeCloseTo(108, 2);
  });

  it('USD → EUR', () => {
    expect(convert(108, 'USD', 'EUR', sampleRates)).toBeCloseTo(100, 2);
  });

  it('GBP → USD', () => {
    expect(convert(100, 'GBP', 'USD', sampleRates)).toBeCloseTo(127.06, 2);
  });
});
