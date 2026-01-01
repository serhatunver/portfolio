/**
 * Formats a date string (YYYY-MM-DD) into "Feb, 2025" format.
 * @param dateString - The ISO date string to format
 * @returns Formatted month and year string
 */
export function formatMonthYear(dateString: string): string {
  const date = new Date(dateString);

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
  }).format(date);
}

/**
 * Generates a duration string for a timeline item.
 * If endDate is missing or null, "Present" will be used.
 * Examples:
 *   "Feb, 2025 - Jan, 2026"
 *   "Feb, 2025 - Present"
 * @param startDate - ISO start date string
 * @param endDate - Optional ISO end date string
 * @returns Duration string
 */
export function formatDuration(
  startDate: string,
  endDate?: string | null,
): string {
  const startText = formatMonthYear(startDate);
  const endText = endDate ? formatMonthYear(endDate) : 'Present';

  return `${startText} - ${endText}`;
}
