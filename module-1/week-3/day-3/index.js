const pet = {
  //property is the key and value
  "pet name": "Ragnar",
  age: 4,
  owner: "Joshua",
  toys: ["ball"],
  bark: function () {
    console.log("woof woof!");
  },
  isAGoodBoy: true,
};

const currentUser = {
  username: "Lari",
  email: "lari@lari.com",
  password: "1234",
};

// console.log("the pets name is:", pet.name, "and his age is:", pet.age);

// console.log(pet["pet name"]);
//invoking a method on our pet
pet.bark();
//add a property
pet.toys = ["ball"];
pet.age = 5;
pet.toys.push("bone");
const test = "age";
// console.log("here is the age:", pet[test]);

//delete a property
// console.log("before:", pet);
// delete pet.owner;
// console.log("after:", pet);

//Object.keys and Object.values
const theKeys = Object.keys(pet);
const theValues = Object.values(pet);

//for in loop over an object
for (let key in pet) {
  console.log("keys", key);
  console.log("values", pet[key]);
  if (key === "owner") {
    break;
  }
}
