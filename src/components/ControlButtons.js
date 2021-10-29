const ControlButtons = ({ handleClear, handleStart, working }) => {
	return (
		<div className="game__buttons--control">
			<button onClick={handleClear}>Clear</button>
			<button onClick={handleStart}>{working ? 'Stop' : 'Start'}</button>
		</div>
	);
};

export default ControlButtons;
