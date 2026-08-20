const READABLE_DATE_OPTIONS: Intl.DateTimeFormatOptions =
{
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

export function toReadableDate(isoDate: string): string
{
    return new Date(isoDate).toLocaleDateString(undefined, READABLE_DATE_OPTIONS);
}
