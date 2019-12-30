// My try

const drawStaris = (n) => {
	arr = [];
	for (i = 0; i < n; i++) {
		arr.push('I\n');
	}
	console.log(arr);
};

// Solution

function drawStairs(n) {
	let step = 'I';
	for (let i = 1; i < n; i++) {
		step += '\n' + ' '.repeat(i) + 'I';
	}
	console.log(step);
}

drawStairs(3);
