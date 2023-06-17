// add whatever parameters you deem necessary
// Solution 1 - 2 pointers - O(N * log N)
// function countPairs(arr, target) {
//   const sorted = arr.sort((a, b) => a - b); // O(N * log N)

//   let pairs = 0;
//   if (arr.length < 2) return pairs;

//   let left = 0,
//     right = arr.length - 1;

//   while (left < right) {
//     if (arr[left] + arr[right] > target) {
//       right--;
//     } else if (arr[left] + arr[right] < target) {
//       left++;
//     } else {
//       pairs++;
//       left++;
//     }
//   }

//   return pairs;
// }

// Solution 2 - map - O(n)
function countPairs(arr, target) {
  let pairs = 0;
  let map = new Map();

  for (const num of arr) {
    const otherHalf = target - num;
    if (map.has(otherHalf)) {
      pairs++;
    } else {
      map.set(num, otherHalf);
    }
  }

  return pairs;
}
