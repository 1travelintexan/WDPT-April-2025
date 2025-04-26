// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  console.log(num1, num2);
  if (num1 >= num2) {
    return num1;
  }
  return num2;
}

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(arrayOfWords) {
  if (arrayOfWords.length === 0) return null;
  let longestWord = "";
  for (let i = 0; i < arrayOfWords.length; i++) {
    const currentWord = arrayOfWords[i];
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
  }
  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
const ourNumbers = [1, 2, 3];

function sumNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    sum = sum + currentNumber;
  }
  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersToAverage) {
  if (numbersToAverage.length === 0) return 0;
  const total = sumNumbers(numbersToAverage);
  return total / numbersToAverage.length;
}

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(arrayOfWords, aWord) {
  if (arrayOfWords.length === 0) return null;
  //junior solution
  for (let i = 0; i < arrayOfWords.length; i++) {
    const currentWord = arrayOfWords[i];
    if (currentWord === aWord) {
      return true;
    }
  }
  return false;
  //more advanced solution
  //   if (arrayOfWords.includes(aWord)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  //oneliner
  //   return arrayOfWords.includes(aWord);
}
