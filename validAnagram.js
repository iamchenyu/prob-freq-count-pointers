function validAnagram(str1, str2) {
  // check if 2 strings are the same length
  if (str1.length !== str2.length) return false;
  // make frequency counters for each string
  const freqCounter1 = freqCounter(str1);
  const freqCounter2 = freqCounter(str2);
  // loop over each key of counter1
  for (const char of freqCounter1.keys()) {
    // check if eack key of counter1 exists in counter2 AND has the same frequency
    if (
      !freqCounter2.has(char) ||
      freqCounter2.get(char) !== freqCounter1.get(char)
    )
      return false;
  }
  return true;
}

// helper function
function freqCounter(str) {
  const counter = new Map();
  for (const char of str) {
    counter.set(char, counter.get(char) + 1 || 1);
  }
  return counter;
}

function countUniqueValues(arr) {
  let left = 0;
  let right = 1;
  let result = 1;

  if (arr.length === 0 || arr.length === 1) return arr.length;

  while (right < arr.length) {
    if (arr[right] === arr[left]) {
      right++;
    } else {
      result++;
      left = right;
      right = left + 1;
    }
  }
  return result;
}

function countUniqueValues2(arr) {
  const set = new Set(arr);
  return set.size;
}
