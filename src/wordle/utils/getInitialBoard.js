export const getInitialBoard = (rowsNumber, colsNumber, content = {}) => {
  let newBoard = [];

  for (let i = 0; i < rowsNumber; i++) {
    newBoard.push([]);
    for (let j = 0; j < colsNumber; j++) {
      newBoard[i].push({ ...content });
    }
  }
  return newBoard;
};
