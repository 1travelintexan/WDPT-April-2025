//Regular function declarations are HOISTED
//which means you use the function before its declaration
add(1, 1)
function add(num1, num2) {
  return num1 + num2
}

//arrow functions, are not HOISTED
//which means you can only call them after declaring
const subtract = (a, b) => {
  return a - b
}
subtract(2, 1)

function makeJuice(fruit1, fruit2, fruit3, fruit4) {
  //returns a object with all arguments passed when invoked the function
  console.log(arguments)
}

makeJuice("banana", "maca", "pera", "manga")

// arrow function syntax
// () => {}

const numArr = [1, 2, 4, 5, 6, 7]

numArr.forEach((num) => console.log(num))
