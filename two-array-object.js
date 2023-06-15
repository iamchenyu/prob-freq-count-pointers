// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
  let result = {};

  if (arr1.length === 0) return result;

  for (let i = 0; i < arr1.length; i++) {
    if (i > arr2.length - 1) {
      result[arr1[i]] = null;
    } else {
      result[arr1[i]] = arr2[i];
    }
  }

  return result;
}
