// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
  const lowerStr1 = str1.toLowerCase();
  const lowerStr2 = str2.toLowerCase();

  if (lowerStr1.length === 0) return true;

  if (lowerStr2.length === 0) return lowerStr1.length === 0;

  let p1 = 0,
    p2 = 0;

  while (p1 < lowerStr1.length && p2 < lowerStr2.length) {
    if (lowerStr1[p1] === lowerStr2[p2]) {
      p1++;
      p2++;
    } else {
      p2++;
    }
  }

  return p1 === lowerStr1.length;
}
