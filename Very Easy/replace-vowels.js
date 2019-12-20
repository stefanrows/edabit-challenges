// Create a function replaces all the vowels in a string with a specified character

//Short Version

function replaceVowels(str, ch) {
	console.log(str.replace(/[aeoiu]/g, ch));
}

replaceVowels('shakespeare', '*');

//Long Version

function replaceVowels(str, ch) {
	const vowels = [ 'a', 'e', 'i', 'o', 'u' ];

	const strArry = [ ...str ].map((char) => {
		return vowels.includes(char) ? ch : char;
	});
	return strArry.join('');
}
