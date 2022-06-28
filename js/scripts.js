function addText(text) {
  let newArray = [];
  const vowelsArray = ["a", "e", "i", "o", "u"];
  // if first letter of elemt of array has vowels;
  const textArray = text.split(" ");
  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i].includes(vowelsArray)) {
      return textArray[i].concat("way");
    }

  }

}