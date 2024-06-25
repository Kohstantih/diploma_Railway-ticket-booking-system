export function filtrationObject<T>(object: T) {
  const result = {} as T;

  for (const key in object) {
    if (object[key] !== undefined) result[key] = object[key];
  }

  return result;
}
