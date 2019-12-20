// Create a function that removes the first and last characters from a string.

const word = 'cCelloAsdasdas';

const removeFirstLast = (word) => {
	if (word.length >= 3) {
		lastChar = word.length - 1;
		console.log(word.slice(1, lastChar));
	} else {
		console.log(word);
	}
};

removeFirstLast(word);

// Very short solution

removeFirstLast = (str) => str.slice(1, -1) || str;
