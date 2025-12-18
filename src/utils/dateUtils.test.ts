import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';
import { formatLastUpdated } from './dateUtils';

describe('formatLastUpdated', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('returns "today" if the date is the same calendar day', () => {
    const now = new Date('2023-10-10T14:00:00Z');
    vi.setSystemTime(now);
    // Same day, earlier time
    expect(formatLastUpdated('2023-10-10T08:00:00Z')).toBe('today');
  });

  it('returns "yesterday" if the date is the previous calendar day', () => {
    const now = new Date('2023-10-10T14:00:00Z');
    vi.setSystemTime(now);
    expect(formatLastUpdated('2023-10-09T23:00:00Z')).toBe('yesterday');
  });

  it('returns "2 days ago" for 2 calendar days difference', () => {
    const now = new Date('2023-10-10T14:00:00Z');
    vi.setSystemTime(now);
    expect(formatLastUpdated('2023-10-08T10:00:00Z')).toBe('2 days ago');
  });

  it('handles across months correctly', () => {
    const now = new Date('2023-11-01T14:00:00Z');
    vi.setSystemTime(now);
    // October 31st vs November 1st is 1 day ago
    expect(formatLastUpdated('2023-10-31T10:00:00Z')).toBe('yesterday');
  });

  it('handles across years correctly', () => {
    const now = new Date('2024-01-01T14:00:00Z');
    vi.setSystemTime(now);
    // December 31st vs January 1st is 1 day ago
    expect(formatLastUpdated('2023-12-31T10:00:00Z')).toBe('yesterday');
  });
});
