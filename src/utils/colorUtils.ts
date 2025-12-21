export function normalizeHexColor(rawColor: string): string {
  if (!rawColor) return '#e5e7eb'; // Default gray-200
  if (rawColor.startsWith('#')) return rawColor;
  if (rawColor.length === 8) {
    // ARGB -> #RRGGBB
    return '#' + rawColor.substring(2);
  }
  // Assume RGB hex without hash
  return '#' + rawColor;
}
