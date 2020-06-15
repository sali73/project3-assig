function reverseInt(int) {
	let reverse = parseInt(Math.abs(int).toString().split('').reverse().join(''));
  if (Math.sign(int) === -1) {
    reverse *= -1;
  }
  return reverse;
}

console.log(
reverseInt(981),
reverseInt(500),
reverseInt(-15),
reverseInt(-90))