export function getTimeObject(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minute = Math.floor((seconds - hours * 3600) / 60);

  return {
    hours,
    minute,
  };
}
