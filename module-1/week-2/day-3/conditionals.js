let dogName = "Ragnar"
let catName = "Babush"
let dogAge = 0

if (dogName && dogAge) {
  console.log("dog has name and age")
} else if (dogName && catName) {
  console.log("dogs name is " + dogName + " and the cats name is " + catName)
} else if (catName) {
  console.log("cats name is " + catName)
}

// const ricardo = "Ricardo"

// if (ricardo) {
//   let age = 30
// }

// console.log(age) // undefined, age not accessible outside if scope

const charName = "Aria"
let house
switch (charName) {
  case "Jon":
    house = "Targaryen"
    break
  case "Aria":
    house = "Stark"
    break
  case "Tyrion":
    house = "Lannister"
    break
  default:
    house = "Not a member of a house"
}

console.log(
  "The char name is " + charName + " which belongs to the house " + house
)
