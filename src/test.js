let string = "I love you";
let result;
let a;

if (string.includes("love")) {
  result = string.toUpperCase();
  a = string.slice(0, 4);
} else {
  result = string.toLowerCase();
}
console.log(result);
console.log(a);
