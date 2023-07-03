const getLetterState = (index, submittedWord, targetWord) => {
  let state = "";
  const currentLetter = submittedWord[index].toLowerCase();
  const targetLetter = targetWord[index].toLowerCase();
  const inTargetWord = targetWord.toLowerCase().includes(currentLetter);
  if (currentLetter === targetLetter) {
    state = "correct";
  } else if (inTargetWord) {
    state = "wrong-location";
  } else state = "wrong";

  return state;
};

export const updateBoardState = (board, rowNumber, currentWord, targetWord) => {
  const newBoard = [...board];
  for (let i = 0; i < currentWord.length; i++) {
    newBoard[rowNumber][i].state = getLetterState(i, currentWord, targetWord);
  }
  return newBoard;
};

export const getBoardWithUpdatedLetter = (board, row, col, value) => {
  const newBoard = [...board];
  newBoard[row][col].letter = value.toUpperCase();
  return newBoard;
};
