export function convertSecondsToTimeString(seconds: number) {
  const hh = Math.floor(seconds / 3600);
  const mm = Math.floor((seconds - hh * 3600) / 60);

  return `${`${hh}`.length === 1 ? `0${hh}` : `${hh}`} : ${`0${mm}`.slice(-2)}`;
}
