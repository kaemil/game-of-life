const createRandomBoard = (rowsNumber, colsNumber, percentValue) => {
	const rows = [];
	for (let i = 0; i < rowsNumber; i++) {
		rows.push(
			Array.from(Array(colsNumber), () =>
				Math.random() > percentValue / 100 ? 0 : 1,
			),
		);
	}
	return rows;
};

export default createRandomBoard;
