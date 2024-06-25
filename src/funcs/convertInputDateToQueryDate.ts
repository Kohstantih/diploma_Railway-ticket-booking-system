export function convertInputDateToQueryDate(value: string) {
    return `20${value.split('.').reverse().join('-')}`;
}
