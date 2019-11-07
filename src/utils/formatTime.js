const formatTime = raw => {
	const minutes = Math.floor(raw / 60);
	const seconds = Math.floor(raw % 60);
	const hours = Math.floor(raw / 3600);

	if (!hours > 0) {
		return `${minutes
			.toString()
			.padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
	}

	return `${hours.toString().padStart(2, '0')}:${minutes
		.toString()
		.padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export default formatTime;
