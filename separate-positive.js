// add whatever parameters you deem necessary
function separatePositive(arr) {
  if (arr.length < 2) return arr;

  let left = 0,
    right = 1;

  while (right < arr.length) {
    if (arr[left] > 0) {
      left++;
      right++;
    } else {
      if (arr[right] > 0) {
        let temp = arr[right];
        arr[right] = arr[left];
        arr[left] = temp;
        left++;
        right++;
      } else {
        right++;
      }
    }
  }

  return arr;
}
