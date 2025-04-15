const num = 1
const zero = 0

console.log(num)

//LOGICAL OPERATORS

//equality operator
console.log(num == 2) // false, 1 not equal to 2
console.log(num == 1) // true, 1 is equal to 1
console.log(num === 1) // true, 1 is equal to 1 and is of type number
console.log(num == "1") // true, 1 is equal to 1
console.log(num === "1") // false, "1" is of type string, and num is a number

console.log(num > 2) // false
console.log(num > 0) // true, 1 is greater than 0
console.log(num < 10) // true, 1 is lesser than 10
console.log(num >= 1) // true, 1 is equal to 1
console.log(num <= 10) // true, 10 still greater than 1

console.log("" || 1 == false) // false, 1 is a truthy value
console.log(0 || 1 == false) // false, 1 is a truthy value
console.log("" || 0 == false) // true, both are false
console.log(1 || 0 == false) // false, 1 is truthy

if (num && 0) {
  console.log("hello") //console.log doesnt happen
}

if (num || zero) {
  console.log("OR here") //console.log happens
}

console.log(!0) // true
console.log(!1) // false
console.log(!true) // false, NOT true is false
console.log(!false) // true, NOT false is true
