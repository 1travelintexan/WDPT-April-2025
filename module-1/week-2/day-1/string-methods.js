const myString = "this is my string, it's amazing"
//index starts at 0
//length starts at 1

console.log(myString[0]) //access character in first position
console.log(myString[15]) //access character in first position
console.log(myString[2]) //access character in first position

console.log(myString.length) // 31
console.log(myString[30]) // gets last element, "g"
console.log(myString[myString.length - 1]) // gets last element, "g"

console.log(myString.slice(0)) // slices the entire string
console.log(myString.slice(0, myString.length / 2)) // from start to middle
console.log(myString.slice(myString.length / 2)) // from middle to end

const firstName = "daniel"
const lastName = "skonetzky"

console.log(
  firstName.slice(0, 1).toUpperCase() +
    firstName.slice(1) +
    " " +
    lastName.slice(0, 1).toUpperCase() +
    lastName.slice(1)
)

console.log(
  `${firstName[0].toUpperCase() + firstName.slice(1)} ${
    lastName[0].toUpperCase() + lastName.slice(1)
  }`
)
