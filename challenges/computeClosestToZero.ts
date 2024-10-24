// Implement the function `computeClosestToZero(ts: number[]): number` which takes an array of temperatures `ts` and returns the temperature closest to 0.

// [$]> npx ts-node computeClosestToZero.ts

function computeClosestToZero(ts: number[]): number {
  if (!ts.length) return 0;
  let closest = 0;
  for (let i = 0; i < ts.length; i++) {
    if (closest === 0) {
      closest = ts[i];
    } else if (ts[i] > 0 && ts[i] <= Math.abs(closest)) {
      closest = ts[i];
    } else if (ts[i] < 0 && -ts[i] < Math.abs(closest)) {
      closest = ts[i];
    }
  }
  return closest;
}

let items: number[] = [];
console.log('Result: ' + computeClosestToZero(items)); // 0

items = [7, -10, 13, 8, 4, -7.2, -12, -3.7, 3.5, -9.6, 6.5, -1.7, -6.2, 7];
console.log('Result: ' + computeClosestToZero(items)); // -1.7

items = [5, 6, 7, 9, 2, -2];
console.log('Result: ' + computeClosestToZero(items)); // 2

// https://algo.monster/liteproblems/2239
// https://zerowp.com/find-the-closest-number-from-an-array
// https://ourcodeworld.com/articles/read/1470/how-to-find-the-closest-value-to-zero-from-an-array-with-positive-and-negative-numbers-in-javascript
