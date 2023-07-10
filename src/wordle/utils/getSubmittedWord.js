export const getSubmittedWord = (board, attemptCount) => {
  const submittedWord = board[attemptCount].reduce(
    (word, tile) => word + tile.letter,
    ""
  );

  return submittedWord.toLowerCase();
};
