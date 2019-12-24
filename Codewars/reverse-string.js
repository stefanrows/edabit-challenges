const solution = (str) => {
	let splitString = str.split('');
	let reverseArray = splitString.reverse();
	let joinArray = reverseArray.join('');
	console.log(joinArray);
};

solution('Hello');

// short

const solution = str => str.split('').reverse().join('');
