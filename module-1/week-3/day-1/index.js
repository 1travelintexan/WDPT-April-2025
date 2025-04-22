//Declaring functions with the 'function' keyword
// function addTwoNumbers(){}
function addTwoNumbers(num1, num2) {
  const total = num1 + num2;
  return total;
}
//to actually see the results of a function you need to 'call' it
const sum1 = addTwoNumbers(2, 3);
const sum2 = addTwoNumbers(5, 10);

//Declaring a function with the 'fat arrow' syntax
const subtractTwoNumbers = (number1, number2) => {
  const difference = number1 - number2;
  return difference;
};
//calling a fat arrow syntax is exactly the same
const sub1 = subtractTwoNumbers(20, 5, "test", "pizza");

// Arrays
const numbersArray = [100, 650, 200, 1, 1, 77];
const numbersArray2 = [1001, 60, 28800, 1111, 1898, 7000007];
// console.log(numbersArray[2], studentsArray[1]);
function getBiggestNumber(arr) {
  //first way to find biggest number
  let biggestNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];
    if (currentNumber > biggestNumber) {
      biggestNumber = currentNumber;
    }
  }
  return biggestNumber;

  //oneline version
  //   return Math.max(2, 3, 4, 66);
}
const biggestNumber1 = getBiggestNumber(numbersArray);
const biggestNumber2 = getBiggestNumber(numbersArray2);
console.log({ biggestNumber1, biggestNumber2 });

const studentsArray = ["alex", "tim", "dani", "thathsara", "joice"];
//create a function that takes an array of names and returns a new array of the name capitalized
const capNames = (arrayOfNames) => {
  let newArray = [];
  //make a loop over the array and uppercase the first letter of each name
  for (let i = 0; i < arrayOfNames.length; i++) {
    const name = arrayOfNames[i][0].toUpperCase() + arrayOfNames[i].slice(1);
    newArray.push(name);
  }

  return newArray;
};
// always make sure to call your fuctions or 'invoke' them
// console.log(capNames(studentsArray));
// console.log(studentsArray);

//.splice( ) example
const pets = ["Ragnar", "Buddy", "Tomas"];
console.log("pets before", pets);
//remove element 2 with splice()
//to remove element, you need a starting index and a delete count
// you can remove and add elements with .splice() the added element is an optional argument after the delete count
const test = pets.splice(1, 1, "Kiwi", "Leo");
// console.log(pets);

//function count duplicates in an array
function findStudent(array, studentName) {
  let str = `${studentName} is not here, bad student`;
  for (let i = 0; i < array.length; i++) {
    const currStudent = array[i];
    if (currStudent === studentName) {
      str = `${currStudent} present at index: ${i}`;
    }
  }
  console.log(str);
}

//make sure to call the function
findStudent(studentsArray, ["dani", "felix"]);
findStudent(studentsArray, "felix");
findStudent(studentsArray, "tim");
