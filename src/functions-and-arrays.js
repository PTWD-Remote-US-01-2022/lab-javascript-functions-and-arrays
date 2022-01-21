// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  return Math.max(num1, num2);
  // if (num1 > num2) {
  //   return num1
  // } else {
  //   return num2
  // }
}

maxOfTwoNumbers(2, 8);

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(arr) {
  if (arr.length === 0) return null;

  let longestWord = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }
  return longestWord;
}

findLongestWord(words);

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numArr) {
  let sum = 0;

  for (let i = 0; i < numArr.length; i++) {
    sum += numArr[i];
  }
  return sum;
}
sumNumbers(numbers);

// Iteration #3.1 Bonus:
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

// should return: 57

function sum(mixedArr) {
  let sum = 0;

  for (let i = 0; i < mixedArr.length; i++) {
    if (typeof mixedArr[i] === 'object' || typeof mixedArr[i] === 'array') {
      throw "Unsupported data type sir or ma'am";
    } else if (typeof mixedArr[i] === 'string') {
      sum += mixedArr[i].length;
    } else {
      sum += mixedArr[i];
    }
  }
  return sum;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
  if (numbers.length === 0) return null;

  return sumNumbers(numbers) / numbers.length;
}

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(words) {
  if (words.length === 0) return null;

  return sum(words) / words.length;
}

// Bonus - Iteration #4.1

// const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
function avg(arr) {
  if (arr.length === 0) return null;

  return Number((sum(arr) / arr.length).toFixed(2));
}

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(wordsUnique) {
  if (wordsUnique.length === 0) return null;
  let noDupes = [];

  for (let i = 0; i < wordsUnique.length; i++) {
    if (noDupes.indexOf(wordsUnique[i]) === -1) {
      noDupes.push(wordsUnique[i]);
    }
  }
  return noDupes;
}

// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(arr, singleWord) {
  if (arr.length === 0) return null;

  for (let i = 0; i < arr.length; i++) {
    if (singleWord === arr[i]) return true;
  }
  return false;
}

// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(arr, singleWord) {
  if (arr.length === 0) return 0;
  let count = 0;

  // for (let i = 0; i < arr.length; i++) {
  //   if (singleWord === arr[i]) count++
  // }

  arr.forEach(function (word) {
    if (singleWord === word) count++;
  });
  return count;
}

// Iteration #8: Bonus
const matrix = [
[1, 2, 3, 4, 5]
[ 1, 20, 3, 4, 5]
[ 1, 20, 3, 4, 5]
[ 1, 20, 3, 4, 5]
[ 1,  4, 3, 4, 5]];

function greatestProduct(arr) {
  let max = 0;
  let n = 4 //greatest product of four adjacent numbers,
  let result;

  for (let i = 0; i <= n; i++) {
    
    for (let j = 0; j <= n; j++) {
      if (j <= arr[i].length - n) {
        result = arr[i][j] * arr[i][j + 1] * arr[i][j + 2] * arr[i][j + 3];
        if (max < result) max = result;
      }
      if (i <= arr.length - n) {
        result = arr[i][j] * arr[i + 1][j] * arr[i + 2][j] * arr[i + 3][j];

        if (max < result) max = result;
      }
    }
  }

  return max;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
