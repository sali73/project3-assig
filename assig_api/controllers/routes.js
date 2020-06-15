const express = require('express');
const router = express.Router();
// maxChar
function maxChar(str) {
	let charCount = {};
  for(let char of str){
  	if (charCount[char]){
    	charCount[char] += 1;
    }
    if (!charCount[char]){
    	charCount[char] = 1;
  	}
  }
  const max = Object.keys(charCount).reduce((a, b) => charCount[a] > charCount[b] ? a: b);
  return max;
}
router.post('/max-char', (req, res) => {
  const { str } = req.body;
  const getMaxChar = maxChar(str)
  res.status(200).json(getMaxChar);
})
// reverseInt
function reverseInt(int) {
	let reverse = parseInt(Math.abs(int).toString().split('').reverse().join(''));
  if (Math.sign(int) === -1) {
    reverse *= -1;
  }
  return reverse;
}
router.post('/reverse-int', (req, res) => {
    const { int } = req.body;
    const getReverseInt = reverseInt(int);
    res.status(200).json(getReverseInt);
})

module.exports = router;