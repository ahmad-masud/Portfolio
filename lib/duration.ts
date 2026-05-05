export function calculateDuration(period: string): string {
  try {
    const parts = period.split(/\s*[-–]\s*|\s+to\s+/i);
    if (parts.length !== 2) return "";

    const startStr = parts[0].trim();
    const endStr = parts[1].trim();

    // Parse start date
    const startDate = parseDate(startStr);
    if (!startDate) return "";

    // Parse end date (Present means today)
    const endDate =
      endStr.toLowerCase() === "present" ? new Date() : parseDate(endStr);
    if (!endDate) return "";

    // Calculate difference (add 1 to include both start and end months)
    let months =
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      (endDate.getMonth() - startDate.getMonth()) +
      1;

    // Adjust if end day is before start day
    if (endDate.getDate() < startDate.getDate()) {
      months--;
    }

    if (months < 0) return "";

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years === 0) {
      return `${remainingMonths} ${remainingMonths === 1 ? "month" : "months"}`;
    } else if (remainingMonths === 0) {
      return `${years} ${years === 1 ? "year" : "years"}`;
    } else {
      return `${years} ${years === 1 ? "year" : "years"} ${remainingMonths} ${remainingMonths === 1 ? "month" : "months"}`;
    }
  } catch {
    return "";
  }
}

function parseDate(dateStr: string): Date | null {
  dateStr = dateStr.trim();

  // Try parsing "Month Year" format (e.g., "Sep 2025", "June 2026")
  const monthYearMatch = dateStr.match(
    /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{4})$/i
  );
  if (monthYearMatch) {
    const months: Record<string, number> = {
      jan: 0,
      feb: 1,
      mar: 2,
      apr: 3,
      may: 4,
      jun: 5,
      jul: 6,
      aug: 7,
      sep: 8,
      oct: 9,
      nov: 10,
      dec: 11,
    };
    const monthName = monthYearMatch[1].toLowerCase().slice(0, 3);
    const year = parseInt(monthYearMatch[2], 10);
    const month = months[monthName];
    return new Date(year, month, 1);
  }

  // Try parsing just year format (e.g., "2022", "2026")
  const yearMatch = dateStr.match(/^(\d{4})$/);
  if (yearMatch) {
    const year = parseInt(yearMatch[1], 10);
    return new Date(year, 0, 1);
  }

  return null;
}
