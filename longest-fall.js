// add whatever parameters you deem necessary
// Solution 2
function longestFall(arr) {
  if (arr.length === 0) return 0;

  let longest = 1,
    count = 1;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] < arr[i]) {
      count++;
      longest = Math.max(longest, count);
    } else {
      count = 1;
    }
  }

  return longest;
}

// Solution 1
// function longestFall(arr) {
//   if (arr.length === 0 || arr.length === 1) return arr.length;

//   let longest = [],
//     result = 0,
//     left = 0,
//     right = 1;

//   longest.push(arr[left]);

//   while (right < arr.length) {
//     if (arr[right] < arr[left]) {
//       longest.push(arr[right]);
//     } else {
//       result = Math.max(result, longest.length);
//       longest = [arr[left]];
//     }
//     left++;
//     right++;
//   }

//   return Math.max(result, longest.length);
// }
