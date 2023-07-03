export const getSubmittedWord = (board, attemptCount) => {
  let submittedWord = "";
  board[attemptCount].forEach((item) => {
    submittedWord += item.letter;
  });
  return submittedWord.toLowerCase();
};
