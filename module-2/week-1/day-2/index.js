//Destructuring in JS with objects
const user = {
  firstName: "Joshua",
  lastName: "George",
  age: 38,
  email: "joshua@joshua.com",
};
const user2 = {
  firstName: "Felix",
  lastName: "Idk",
  age: 21,
  email: "felix@felix.com",
};
const arrayOfUsers = [user, user2];
const { lastName, age, firstName, email } = user;
console.log(firstName, "'s Profile Page");
console.log(email);
console.log(age);

//destructuring with arrays
const students = ["Kostas", "Alex", "Dani", "Felix"];

const [_, ...pizza] = students;
const studentsCopy = [...students];
console.log(pizza);
