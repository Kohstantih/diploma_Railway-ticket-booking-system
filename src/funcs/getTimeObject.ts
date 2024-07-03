export function getTimeObject(seconds: number) {
  const date = new Date(seconds * 1000);

  return {
    hours: date.getHours(),
    minute: date.getMinutes(),
  };
}
