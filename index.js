'use strict';

module.exports = luhn;

function luhn( a, b ){
	if (a === true)
		return b.slice(-1) === calculate(b.slice(0, -1));

	return calculate(b || a);
}

function calculate( numbers ){
	var length = numbers.length;

	// Step 1 + 2
	var product = numbers.split('').reduce(function( p, c, i ){
		var isAlternate = (i + length) % 2 === 1;

		return p + (isAlternate ? sumDigits((+c) * 2) : +c);
	}, 0);

	// Step 3
	return ((10 - (product % 10)) % 10)+'';
}

function sumDigits( number ){
	return (number+'').split('').reduce(sum, 0);
}

function sum( a, b ){
	return +a + +b;
}
