// The code does not execute properly. Try to figure out why.

// const oddOrEven = (num) => {
// 	if (num % 2 === 0) {
// 		return 'even';
// 	} else {
// 		return 'odd';
// 	}
// };

// ES6

const oddOrEven = (num) => {
	num % 2 === 0 ? console.log('Even') : console.log('Odd');
};

oddOrEven(4);
