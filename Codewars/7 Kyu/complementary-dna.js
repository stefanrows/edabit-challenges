//Long version

function DNAStrand(dna) {
	//your code here
	var result = '';
	for (var i = 0; i < dna.length; i++) {
		if (dna[i] === 'A') {
			result += 'T';
		} else if (dna[i] === 'T') {
			result += 'A';
		} else if (dna[i] === 'C') {
			result += 'G';
		} else if (dna[i] === 'G') {
			result += 'C';
		} else {
			result += dna[i];
		}
	}
	return result;
}

//Short
function DNAStrand(dna) {
	return dna.replace(/./g, function(c) {
		return DNAStrand.pairs[c];
	});
}

DNAStrand.pairs = {
	A: 'T',
	T: 'A',
	C: 'G',
	G: 'C'
};
