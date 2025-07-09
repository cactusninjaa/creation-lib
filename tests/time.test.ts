import { describe, it, expect } from 'vitest';
import { time } from '../src/converters/time';

describe('Time conversions', () => {
  it('seconds ↔ minutes', () => {
    expect(time.secondsToMinutes(120)).toBeCloseTo(2);
    expect(time.minutesToSeconds(2)).toBe(120);
  });

  it('seconds ↔ hours', () => {
    expect(time.secondsToHours(7200)).toBeCloseTo(2);
    expect(time.hoursToSeconds(2)).toBe(7200);
  });

  it('minutes ↔ hours', () => {
    expect(time.minutesToHours(180)).toBeCloseTo(3);
    expect(time.hoursToMinutes(3)).toBe(180);
  });

  it('seconds ↔ days', () => {
    expect(time.secondsToDays(172800)).toBeCloseTo(2);
    expect(time.daysToSeconds(2)).toBe(172800);
  });

  it('minutes ↔ days', () => {
    expect(time.minutesToDays(2880)).toBeCloseTo(2);
    expect(time.daysToMinutes(2)).toBe(2880);
  });

  it('hours ↔ days', () => {
    expect(time.hoursToDays(48)).toBeCloseTo(2);
    expect(time.daysToHours(2)).toBe(48);
  });
});
