export const time = {
  secondsInMinute: 60,
  secondsInHour: 3600,
  secondsInDay: 86400,

  secondsToMinutes(seconds: number): number {
    return seconds / this.secondsInMinute;
  },

  minutesToSeconds(minutes: number): number {
    return minutes * this.secondsInMinute;
  },

  secondsToHours(seconds: number): number {
    return seconds / this.secondsInHour;
  },

  hoursToSeconds(hours: number): number {
    return hours * this.secondsInHour;
  },

  minutesToHours(minutes: number): number {
    return minutes / 60;
  },

  hoursToMinutes(hours: number): number {
    return hours * 60;
  },

  secondsToDays(seconds: number): number {
    return seconds / this.secondsInDay;
  },

  daysToSeconds(days: number): number {
    return days * this.secondsInDay;
  },

  minutesToDays(minutes: number): number {
    return minutes / (60 * 24);
  },

  daysToMinutes(days: number): number {
    return days * 24 * 60;
  },

  hoursToDays(hours: number): number {
    return hours / 24;
  },

  daysToHours(days: number): number {
    return days * 24;
  },
};
