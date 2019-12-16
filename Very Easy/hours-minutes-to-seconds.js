// Write a function that takes two integers (hours, minutes) and converts them into seconds.

const convert = function(h, m) {
	let hourResult = h * 3600;
	let minresult = m * 60;
	let finalR = hourResult + minresult;
	return finalR;
};

// With Arrow
const convert2 = (h, m) => {
	let hourResult = h * 3600;
	let minresult = m * 60;
	let finalR = hourResult + minresult;
	console.log(finalR);
};

convert2(1, 3);
