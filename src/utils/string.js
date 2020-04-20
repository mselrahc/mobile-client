export function includes(string, search) {
  return string.toLowerCase().includes(search.toLowerCase());
}

export function anyIncludes(strings, search) {
  return strings.some(string => includes(string, search));
}

export function formatMoney(amount) {
  return (
    'Rp ' +
    amount
      .toString()
      .replace(/\./g, ',')
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  );
}

export function isNotBlankDigitString(string) {
  return typeof string === 'string' && /\d+/.test(string);
}
