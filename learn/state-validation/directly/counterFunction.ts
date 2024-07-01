let count = 0

export function increment() {
  count++;
  count--;
  count++;
}

export function getCount() {
  return count;
}

export function reset() {
  count = 0;
}