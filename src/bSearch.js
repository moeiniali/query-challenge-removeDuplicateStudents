const numbers = [
  1,
  2,
  234,
  23,
  3,
  3465,
  6,
  7,
  7,
  ,
  8,
  8,
  8,
  ,
  7,
  3456,
  34,
  ,
  100,
  123,
  3,
  1,
  1,
  1,
  ,
  2234,
  345,
  3,
  345,
  55,
  77,
];

function bSearch(num, x, low, high) {
  console.log(num);
  while (low <= high) {
    mid = (low + high) / 2;
    if (x < a[mid]) {
      high = mid - 1;
    } else {
      if (x > a[mid]) {
        low = mid - 1;
      } else {
        return mid;
      }
    }
  }
  return -1;
}

bSearch(numbers, 100 ,0,0);
