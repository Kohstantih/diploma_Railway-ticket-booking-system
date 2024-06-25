export function getTimeStringFromSeconds(seconds: number) {
  const date = new Date(seconds * 1000);

  return `${`0${date.getHours()}`.slice(-2)} : ${`0${date.getMinutes()}`.slice(-2)}`;
}
