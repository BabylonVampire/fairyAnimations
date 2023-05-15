const randomDoubleValue = (min: number, max: number): number => {
	return Math.random() * (max - min) + min;
}

export default randomDoubleValue;