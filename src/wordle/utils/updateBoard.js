const getLetterState = (index, submittedWord, targetWord) => {
  let state = "";
  const currentLetter = submittedWord[index];
  const targetLetter = targetWord[index];
  const inTargetWord = targetWord.includes(currentLetter);

  if (currentLetter === targetLetter) {
    state = "correct";
  } else if (inTargetWord) {
    state = "wrong-location";
  } else state = "wrong";

  return state;
};

export const setAttemptStatus = (board, attemptCount, status) => {
  const newBoard = [...board];
  newBoard[attemptCount].forEach(
    (_, index) => (newBoard[attemptCount][index].status = status)
  );
  return newBoard;
};

export const updateBoardState = (
  board,
  attemptCount,
  submittedWord,
  targetWord
) => {
  submittedWord = submittedWord.toLowerCase();
  targetWord = targetWord.toLowerCase();

  const newBoard = [...board];
  for (let i = 0; i < submittedWord.length; i++) {
    newBoard[attemptCount][i].state = getLetterState(
      i,
      submittedWord,
      targetWord
    );
  }

  return newBoard;
};

export const addLetter = (board, row, col, value) => {
  const newBoard = [...board];
  newBoard[row][col].letter = value.toUpperCase();
  return newBoard;
};

export const removeLetter = (board, row, col) => {
  const newBoard = [...board];
  newBoard[row][col].letter = "";
  return newBoard;
};
