const RangeButton = ({ percentValue, handleRandom, handleChange }) => {
	return (
		<>
			<div className="game__buttonsRange--bar">
				<span>{percentValue}%</span>
				<input
					type="range"
					onChange={handleChange}
					value={percentValue}
					min="0"
					max="100"
				/>
				<span>100%</span>
			</div>
			<button className="game__buttonsRange--button slider" onClick={handleRandom}>
				Random
			</button>
		</>
	);
};

export default RangeButton;
