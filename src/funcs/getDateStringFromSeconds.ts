export function getDateStringFromSeconds(seconds: number) {
  const date = new Date(seconds * 1000);

  return `${`0${date.getDate()}`.slice(-2)}.${`0${date.getMonth() + 1}`.slice(
    -2
  )}.${`${date.getFullYear()}`.slice(-2)}`;
}
