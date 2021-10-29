import React, { useCallback, useEffect, useRef, useState } from 'react';
import produce from 'immer';
import './css/index.css';
import createEmptyBoard from './functions/createEmptyBoard';
import createRandomBoard from './functions/createRandomBoard';
import checkingWidth from './functions/checkingWidth';
import Board from './components/Board';
import About from './components/About';
import ControlButtons from './components/ControlButtons';
import RangeButton from './components/RangeButton';
import { neighboursPosition } from './functions/neighboursPosition';

function App() {
	const [working, setWorking] = useState(false);
	const [percentValue, setPercentValue] = useState(50);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const [rowsNumber, setRowsNumber] = useState(checkingWidth);
	const [colsNumber, setColsNumber] = useState(checkingWidth);
	const count = useRef(rowsNumber);
	const [board, setBoard] = useState(() => {
		return createEmptyBoard(rowsNumber, colsNumber);
	});

	const workingRef = useRef(working);
	workingRef.current = working;
	const resizeListener = useCallback(() => {
		if (window.innerWidth < 660) {
			count.current = Math.floor((window.innerWidth - 20) / 25);
			setWindowWidth(window.innerWidth);
			setRowsNumber(checkingWidth);
			setColsNumber(checkingWidth);
			setBoard(() => {
				return createEmptyBoard(count.current, count.current);
			});
		}
	}, []);

	useEffect(() => {
		window.addEventListener('resize', resizeListener);
		return () => {
			window.removeEventListener('resize', resizeListener);
		};
	}, [windowWidth, resizeListener]);

	const handleClick = (i, j) => {
		const newBoard = produce(board, (boardCopy) => {
			boardCopy[i][j] = board[i][j] ? 0 : 1;
		});
		setBoard(newBoard);
	};

	const handleChange = (e) => {
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
			return createEmptyBoard(rowsNumber, colsNumber);
		});
	};
	const handleRandom = () => {
		setBoard(() => {
			return createRandomBoard(rowsNumber, colsNumber, percentValue);
		});
	};

	//Function starts simulation and creats mutating board
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
		<div className="game__container" style={{ width: colsNumber * 25 }}>
			<h1>Game of life</h1>
			<div className="game__buttons">
				<About />

				<RangeButton
					handleRandom={handleRandom}
					percentValue={percentValue}
					handleChange={handleChange}
				/>
				<ControlButtons
					handleClear={handleClear}
					handleStart={handleStart}
					working={working}
				/>
			</div>
			<Board
				board={board}
				handleClick={handleClick}
				countCurrent={count.current}
				colsNumber={colsNumber}
			/>
		</div>
	);
}

export default App;
