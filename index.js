const animals = ['cheetah', 'dog', 'cat', 'dodobird', 'bear', 'dolphin'];
const numbers = [22, 15, 1114, 416, 37, 4];

// 1.
function pluralize(arr) {
  return arr.map((el) => `${el}s`);
}
console.log(pluralize(animals));



// 2.
function uppercase(arr) {
  return arr.map((a) => a.charAt(0).toUpperCase() + a.substr(1));
}
console.log(uppercase(animals));



// 3.
function longWords(arr) {
  return arr.filter((word) => word.length > 3);
}
console.log(longWords(animals));



// 4.
function shortWords(arr) {
  return arr.filter((word) => word.length < 5);
}
console.log(shortWords(animals));



// 5.
function oddLength(arr) {
  return arr.filter((word) => word.length % 2);
}
console.log(oddLength(animals));



// 6.
function longToShort(arr) {
  return arr.sort((a, b) => b.length - a.length);
}
console.log(longToShort(animals));



// 7.
function sum(arr) {
  return arr.reduce((a, b) => a + b);
}
console.log(sum(numbers));



// 8.
function longerThanSeven(arr) {
  return arr.some((string) => string.length > 7);
}
console.log(longerThanSeven(animals));



// 9.
function allFour(arr) {
  return arr.every((string) => string.length === 4);
}
console.log(allFour(animals));



// 10.
function onlyVowelA(arr) {
  return arr.filter((string) => string.includes('a'));
}
console.log(onlyVowelA(animals));
