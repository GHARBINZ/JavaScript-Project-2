
function reverseString(str) {
  return str.split('').reverse().join('');
}

function countCharacters(str) {
  return str.length;
}

function capitalizeWords(sentence) {
  return sentence
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

function findMaximum(arr) {
  if (arr.length === 0) return null;
  return Math.max(...arr);
}

function findMinimum(arr) {
  if (arr.length === 0) return null;
  return Math.min(...arr);
}

function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

function filterArray(arr, condition) {
  return arr.filter(condition);
}

function factorial(n) {
  if (n < 0) return undefined;
  if (n === 0 || n === 1) return 1;
  
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

function fibonacciSequence(terms) {
  if (terms <= 0) return [];
  if (terms === 1) return [0];
  if (terms === 2) return [0, 1];
  
  const sequence = [0, 1];
  for (let i = 2; i < terms; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

console.log('--- String Functions ---');
console.log('Reverse "hello":', reverseString('hello'));
console.log('Character count of "JavaScript":', countCharacters('JavaScript'));
console.log('Capitalize "hello world":', capitalizeWords('hello world'));

console.log('\n--- Array Functions ---');
const numbers = [15, 3, 42, 8, 25];
console.log('Array:', numbers);
console.log('Maximum:', findMaximum(numbers));
console.log('Minimum:', findMinimum(numbers));
console.log('Sum:', sumArray(numbers));
console.log('Filter (> 10):', filterArray(numbers, num => num > 10));

console.log('\n--- Mathematical Functions ---');
console.log('Factorial of 5:', factorial(5));
console.log('Factorial of 10:', factorial(10));
console.log('Is 17 prime?:', isPrime(17));
console.log('Is 20 prime?:', isPrime(20));
console.log('Fibonacci (first 10 terms):', fibonacciSequence(10));

module.exports = {
  reverseString,
  countCharacters,
  capitalizeWords,
  findMaximum,
  findMinimum,
  sumArray,
  filterArray,
  factorial,
  isPrime,
  fibonacciSequence
};
