import React, { useCallback, useRef, useState } from 'react';
import produce from 'immer';
import './css/index.css';

const neighboursPosition = [
	[-1, -1],
	[0, -1],
	[1, -1],
	[-1, 0],
	[1, 0],
	[-1, 1],
	[0, 1],
	[1, 1],
];

const createEmptyBoard = (rowsNumber, colsNumber) => {
	const rows = [];
	for (let i = 0; i < rowsNumber; i++) {
		rows.push(Array(colsNumber).fill(0));
	}
	return rows;
};

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

function App() {
	const [working, setWorking] = useState(false);
	const [percentValue, setPercentValue] = useState(50);
	const [rowsNumber, setRowsNumber] = useState(10);
	const [colsNumber, setColsNumber] = useState(10);

	const [board, setBoard] = useState(() => {
		return createEmptyBoard(rowsNumber, colsNumber);
	});
	const handleClick = (i, j) => {
		const newBoard = produce(board, (boardCopy) => {
			boardCopy[i][j] = board[i][j] ? 0 : 1;
		});
		setBoard(newBoard);
	};

	const workingRef = useRef(working);
	workingRef.current = working;

	const handleChange = (e) => {
		console.log(e.target.value);
		setPercentValue(e.target.value);
	};

	const handleStart = () => {
		setWorking(!working);
		if (!working) {
			workingRef.current = true;
			startSimulation();
		}
	};
	const handleClear = () => {
		setBoard(() => {
			return createEmptyBoard(rowsNumber,colsNumber);
		});
	};
	const handleRandom = () => {
		setBoard(() => {
			return createRandomBoard(rowsNumber,colsNumber,percentValue);
		});
	};

	const startSimulation = useCallback(() => {
		if (!workingRef.current) {
			return;
		}
		setBoard((b) => {
			return produce(b, (boardCopy) => {
				for (let i = 0; i < rowsNumber; i++) {
					for (let j = 0; j < colsNumber; j++) {
						let neighbours = 0;
						neighboursPosition.forEach(([x, y]) => {
							const newI = i + x;
							const newJ = j + y;
							if (
								newI >= 0 &&
								newI < rowsNumber &&
								newJ >= 0 &&
								newJ < colsNumber
							) {
								neighbours += b[newI][newJ];
							}
						});

						if (neighbours < 2 || neighbours > 3) {
							boardCopy[i][j] = 0;
						} else if (b[i][j] === 0 && neighbours === 3) {
							boardCopy[i][j] = 1;
						}
					}
				}
			});
		});
		setTimeout(startSimulation, 200);
	}, [colsNumber, rowsNumber]);

	return (
		<div>
			<button onClick={handleStart}>{working ? 'stop' : 'start'}</button>
			<button onClick={handleClear}>clear</button>
			<span>0%</span>
			<input
				type="range"
				onChange={handleChange}
				value={percentValue}
				min="0"
				max="100"
			/>
			<span>100%</span>
			<button onClick={handleRandom}>random</button>
			<div>{percentValue}</div>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: `repeat(${colsNumber},20px)`,
					backgroundColor: '#2C2C2C',
				}}
			>
				{board.map((rows, i) =>
					rows.map((col, j) => {
						return (
							<div
								onClick={() => handleClick(i, j)}
								key={`${i}-${j}`}
								style={{
									width: 20,
									height: 20,
									boxSizing: 'border-box',
									border: '1px solid #212121',
									backgroundColor: board[i][j] ? '#e65e8b' : null,
								}}
							></div>
						);
					}),
				)}
			</div>
		</div>
	);
}

export default App;
