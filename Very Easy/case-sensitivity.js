const match = (a, b) => {
	let result = a.toLowerCase() === b.toLowerCase() ? true : false;
	return result;
};

match('Hello', 'HEllO');
