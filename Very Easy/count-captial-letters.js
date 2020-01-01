// Solution

function capitalLetters(txt) {
	let ammountOfUpperLetters = 0;
	let arrayOfLetter = txt.split('');
	arrayOfLetter.forEach((letter) => {
		if (letter === letter.toUpperCase()) {
			ammountOfUpperLetters++;
		}
	});

	console.log(ammountOfUpperLetters);
}

capitalLetters('fkfenDnfnfeF');
