const checkingWidth = () => {
	if (window.innerWidth < 660) {
		return Math.floor((window.innerWidth - 20) / 25);
	} else {
		return 25;
	}
};

export default checkingWidth;
