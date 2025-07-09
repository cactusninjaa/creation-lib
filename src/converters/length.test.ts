import { describe, it, expect } from 'vitest';
import { metersToFeet } from './length';

describe('length converters', () => {
  it('should convert meters to feet', () => {
    expect(metersToFeet(1)).toBeCloseTo(3.28084);
  });
});