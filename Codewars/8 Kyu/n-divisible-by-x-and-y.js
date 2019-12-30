// Create a function isDivisible(n, x, y)
// that checks if a number n is divisible by two numbers x AND y.
// All inputs are positive, non-zero digits.

const isDivisible = (n, x, y) => {
	//Check if N is divisible by X AND Y
	result = n % x === 0 && n % y === 0 ? true : false;
	return result;
};

isDivisible(16, 8, 3);
