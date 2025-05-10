//global variable
let pet = "Ragnar";

if (true) {
  //block level scoped variable
  pet = "Tomas";
  //   console.log("inside the if the statement", pet);
}

// console.log("after the if statement", pet);
for (let i = 0; i < 5; i++) {
  let test = "hello";
  //   console.log(innerTest);
  for (let j = 0; j < 5; j++) {
    const innerTest = "world";
    // console.log(test);
  }
}

//functional scope variable
function add(num1, num2) {
  const total = num1 + num2;
  return total;
}

const username = "Joshua";
// console.log(username);

function subtract(a, b) {
  return a - b;
}
const multiply = (a, b) => {
  return a * b;
};

//**********values and copies ******/

const letter = true;
let letter2 = letter;
letter2 = "R";

// console.log({ letter, letter2 });

const arr1 = [100, 2222, 3, [4, 5]];
const arr2 = arr1;
// arr2.push(4);
// arr2.splice(0, 2);
// shallow copy with the spread operator
const arr3 = [...arr1];
arr3[3].push(6);
//true deep copy
const arr4 = JSON.parse(JSON.stringify(arr1)); //after strigify '[1,2,3, [4,5,6]]'
arr4[3].push("hello world");
const arr5 = structuredClone(arr1);
arr5[3].push("this is a deep test");
// console.log({ arr1, arr2, arr3, arr4, arr5 });

const [, favorite, ...pizza] = arr1;

// console.log(favorite);

//****************setTimeout & setInterval ***************/
console.log("this happened now");

setTimeout(() => {
  //   console.log("hello from the timeout");
}, 3000);

const countElement = document.querySelector("#count");
const startElement = document.querySelector("#start-btn");
const stopElement = document.querySelector("#stop-btn");
const cardElement = document.querySelector("#card");
const h3Element = document.querySelector("#card h3");
const oneBtnElement = document.querySelector("#one-btn");

let start = false;
let count = 10;
let intervalId;

startElement.addEventListener("click", () => {
  intervalId = setInterval(() => {
    count--;
    if (count === 0) {
      clearInterval(intervalId);
      cardElement.classList.remove("hidden");
      h3Element.innerText = "RRRRRhhrlkjfdaslkjfal!!!!! 🚀";
      setTimeout(() => {
        cardElement.classList.add("hidden");
      }, 1000);
    } else if (count === 3) {
      cardElement.classList.remove("hidden");
      h3Element.innerText = "Houston we have a problem...";
      setTimeout(() => {
        cardElement.classList.add("hidden");
      }, 1000);
    } else if (count === 8) {
      cardElement.classList.remove("hidden");
      h3Element.innerText = "Lets go!!!!";
      //start a timeout for one second and then hide the div again
      setTimeout(() => {
        cardElement.classList.add("hidden");
      }, 1000);
    }
    countElement.innerText = count;
  }, 1000);
  startElement.style.backgroundColor = "red";
});

stopElement.addEventListener("click", () => {
  console.log("stop!");
  clearInterval(intervalId);
});

oneBtnElement.addEventListener("click", () => {
  if (!start) {
    oneBtnElement.innerText = "One Button Stop";
    oneBtnElement.style.backgroundColor = "red";
    start = !start;
  } else {
    oneBtnElement.innerText = "One Button Start";
    oneBtnElement.style.backgroundColor = "green";
    start = !start;
  }
});
