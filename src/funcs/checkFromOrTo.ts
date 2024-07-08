export function checkFromOrTo(value: 'from' | 'to', direction: 'from' | 'to') {
  if (direction === 'to') return value;
  else return value === 'to' ? 'from' : 'to';
}
