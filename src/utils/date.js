const defaultLocale = 'en-GB';

export function isValidDate(date) {
  return !isNaN(new Date(date));
}

export function localeDateFromString(date, invalidValue = '-') {
  return isValidDate(date) ? new Date(date).toLocaleDateString() : invalidValue;
}

export function localeDateTimeFromString(date, invalidValue = '-') {
  return isValidDate(date)
    ? new Date(date).toLocaleString(defaultLocale)
    : invalidValue;
}
