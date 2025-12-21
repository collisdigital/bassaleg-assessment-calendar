import { describe, it, expect } from 'vitest';
import { normalizeHexColor } from './colorUtils';

describe('normalizeHexColor', () => {
  it('handles ARGB 8-char string', () => {
    expect(normalizeHexColor('FFFF0000')).toBe('#FF0000');
  });

  it('handles RGB 6-char string', () => {
    expect(normalizeHexColor('FF0000')).toBe('#FF0000');
  });

  it('handles existing hex string', () => {
    expect(normalizeHexColor('#FF0000')).toBe('#FF0000');
  });

  it('handles empty string', () => {
    expect(normalizeHexColor('')).toBe('#e5e7eb');
  });
});
