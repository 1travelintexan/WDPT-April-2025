//loop to count until 10
for (let i = 0; i < 10; i++) {
  console.log(i)
}

//loop over a string, print each character
const str1 = "hello im here"
let strWithNoSpace = ""
for (let i = 0; i < str1.length; i++) {
  if (str1[i] === " ") {
    continue
  }
  strWithNoSpace += str[i]
}

console.log(strWithNoSpace)

//for loop reverse from 10 to 0

for (let i = 10; i >= 0; i--) {
  console.log(i)
}

//for loop over a string reverse

const str = "Hi there! I'm about to be reversed"
let reversedString = ""

for (let i = str.length - 1; i >= 0; i--) {
  reversedString += str[i]
}

console.log(reversedString)

//while loop count to 10
let count = 0

while (count < str.length) {
  console.log(str[count])
  count++
}

//do while

let result = ""
let i = 0

do {
  i++
  result += i
} while (i < 5)

console.log(result)

// break/continue in for loop

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue
  }
  if (i === 5) {
    break
  }

  console.log(i)
}
