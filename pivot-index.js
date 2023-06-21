// add whatever parameters you deem necessary
// Solution 2
function pivotIndex(arr) {
  if (arr.length === 0) return -1;

  let rightSum = arr.reduce((accum, curr) => accum + curr, 0);
  let pivot = -1;
  let sum = Infinity;
  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    rightSum -= arr[i];
    leftSum += arr[i - 1] || 0;
    if (leftSum === rightSum) {
      if (leftSum <= sum) {
        pivot = i;
        sum = leftSum;
      }
    }
  }

  return pivot;
}

// Solution 1
// function pivotIndex(arr) {
//   if (arr.length === 0) return -1;

//   let result = -1;
//   let sum = Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     const leftSum = arr.slice(0, i).reduce((accum, curr) => accum + curr, 0);
//     const rightSum = arr.slice(i + 1).reduce((accum, curr) => accum + curr, 0);

//     if (leftSum === rightSum) {
//       if (leftSum <= sum) {
//         sum = leftSum;
//         result = i;
//       }
//     }
//   }

//   return result;
// }
