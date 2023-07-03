export const getRandomWord = (wordsArr) => {
  return wordsArr[Math.floor(Math.random() * wordsArr.length)];
};
