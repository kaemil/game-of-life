const createEmptyBoard = (rowsNumber, colsNumber) => {
	const rows = [];
	for (let i = 0; i < rowsNumber; i++) {
		rows.push(Array(colsNumber).fill(0));
	}
	return rows;
};

export default createEmptyBoard;
