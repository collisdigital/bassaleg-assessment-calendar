export function formatLastUpdated(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();

  // Reset time part to compare calendar days
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const n = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const diffTime = n.getTime() - d.getTime();
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return 'today';
  } else if (diffDays === 1) {
    return 'yesterday';
  } else {
    return `${diffDays} days ago`;
  }
}
