export function includes(string, search) {
  return string.toLowerCase().includes(search.toLowerCase());
}

export function anyIncludes(strings, search) {
  return strings.some(string => includes(string, search));
}
