export default function getCoachNumber(coachName: string) {
  return coachName.split('-')[1].trim();
}
