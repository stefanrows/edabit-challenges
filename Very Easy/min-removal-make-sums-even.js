function minimumRemovals(arr) {
	let x = arr.reduce((a, b) => a + b);
	if (x % 2 === 0) {
		return 0;
	} else {
		return 1;
	}
}
