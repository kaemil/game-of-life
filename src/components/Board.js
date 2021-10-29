const Board = ({ board, handleClick, colsNumber,countCurrent }) => {
	const width = colsNumber * 25;
	return (
		<div
      className="game__board"
			style={{
				display: 'grid',
				gridTemplateColumns: `repeat(${countCurrent},25px)`,
				backgroundColor: '#424242',
				width: width,
			}}
		>
			{board.map((rows, i) =>
				rows.map((col, j) => {
					return (
						<div
							onClick={() => handleClick(i, j)}
							key={`${i}-${j}`}
							style={{
								width: 25,
								height: 25,
								boxSizing: 'border-box',
								border: '1px solid #212121',
								backgroundColor: board[i][j] ? '#e65e8b' : null,
							}}
						></div>
					);
				}),
			)}
		</div>
	);
};

export default Board;
