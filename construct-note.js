// add whatever parameters you deem necessary
function constructNote(note, string) {
  const frequencyCounter1 = frequencyCounter(note);
  const frequencyCounter2 = frequencyCounter(string);

  for (const key in frequencyCounter1) {
    if (
      !frequencyCounter2[key] ||
      frequencyCounter2[key] < frequencyCounter1[key]
    )
      return false;
  }

  return true;
}

function frequencyCounter(str) {
  const counter = {};
  for (const char of str) {
    counter[char] = counter[char] + 1 || 1;
  }
  return counter;
}
