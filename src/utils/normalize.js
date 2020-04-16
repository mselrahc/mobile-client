export function normalize(data, keyMapper = item => item.id) {
  return data.reduce(
    (obj, item) => Object.assign(obj, { [keyMapper(item)]: item }),
    {},
  );
}

export function filterNormalized(data, filter) {
  return normalize(Object.values(data).filter(filter));
}
