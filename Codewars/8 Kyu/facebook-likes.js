let names = [ 'Peter', 'Alex', 'Moroner', 'Metallbert' ];

function likes(names) {
	if (names.length === 0) {
		console.log('EMPTY!');
	} else if (names.length === 1) {
		console.log(`${names[0]} likes this`);
	} else if (names.length === 2) {
		console.log(`${names[0]} and ${names[1]} likes this`);
	} else if (names.length === 3) {
		console.log(`${names[0]}, ${names[1]} and ${names[2]} likes this`);
	} else {
		console.log(`${names[0]}, ${names[1]} and ${names.length - 2} others like this`);
	}

}

likes(names);
