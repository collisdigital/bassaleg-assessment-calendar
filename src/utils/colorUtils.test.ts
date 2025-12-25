import { describe, it, expect } from 'vitest';
import { hexToRgba } from './colorUtils';

describe('hexToRgba', () => {
  it('converts 7-character hex codes (#RRGGBB)', () => {
    expect(hexToRgba('#FF0000', 1)).toBe('rgba(255, 0, 0, 1)');
    expect(hexToRgba('#00FF00', 0.5)).toBe('rgba(0, 255, 0, 0.5)');
    expect(hexToRgba('#0000FF', 0)).toBe('rgba(0, 0, 255, 0)');
    expect(hexToRgba('#FFFFFF', 1)).toBe('rgba(255, 255, 255, 1)');
    expect(hexToRgba('#000000', 1)).toBe('rgba(0, 0, 0, 1)');
  });

  it('converts 4-character hex codes (#RGB)', () => {
    expect(hexToRgba('#F00', 1)).toBe('rgba(255, 0, 0, 1)');
    expect(hexToRgba('#0F0', 0.5)).toBe('rgba(0, 255, 0, 0.5)');
    expect(hexToRgba('#00F', 0)).toBe('rgba(0, 0, 255, 0)');
    expect(hexToRgba('#FFF', 1)).toBe('rgba(255, 255, 255, 1)');
    expect(hexToRgba('#000', 1)).toBe('rgba(0, 0, 0, 1)');
  });

  it('handles invalid hex codes gracefully (returns 0,0,0)', () => {
    // Current implementation defaults to 0,0,0 for invalid lengths
    expect(hexToRgba('#INVALID', 1)).toBe('rgba(0, 0, 0, 1)');
    expect(hexToRgba('', 1)).toBe('rgba(0, 0, 0, 1)');
    expect(hexToRgba('12345', 1)).toBe('rgba(0, 0, 0, 1)');
  });

  it('handles malformed hex strings but correct length (returns NaN components)', () => {
      // Current implementation uses parseInt which may return NaN.
      // E.g. #ZZZZZZ length is 7
      // parseInt('ZZ', 16) -> NaN
      // This documents current behavior, though strictly it produces invalid CSS rgba()
      expect(hexToRgba('#ZZZZZZ', 1)).toBe('rgba(NaN, NaN, NaN, 1)');
  });
});
