// Write a function that returns true
// if two rooks can attack each other, and false otherwise.

const word1 = 'E3';
const word2 = 'E8';

const canCapture = function(a, b) {
	if (a.charAt(0) === b.charAt(0) || a.charAt(1) === b.charAt(1)) {
		return true;
	} else {
		return false;
	}
};


canCapture(word1, word2);
