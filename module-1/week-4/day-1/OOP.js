//creating/declaring the class
class Person {
  constructor(name, age, country) {
    this.name = name
    this.age = age
    this.country = country
  }
  sayHello() {
    console.log("hello! my name is " + this.name)
  }
}

//creating an instance of the class Person
const daniel = new Person("daniel", 25, "Brasil", "rua 90")
const alex = new Person("alex", 28, "Portugal")
const lari = new Person("lari", 29, "Brasil")

console.log("daniel object", daniel)
console.log("lari object", lari)
console.log("alex object", alex)

daniel.sayHello()
lari.sayHello()
alex.sayHello()
console.log("Person", Person)

class Animal {
  constructor(name, age, color) {
    this.name = name
    this.age = age
    this.color = color
  }

  walk() {
    console.log(this.name + " is walking!")
  }
}

class Dog extends Animal {
  constructor(name, age, color, breed) {
    super(name, age, color)
    this.dogBreed = breed
  }
}

const fred = new Dog("Fred", 4, "caramelo", "rotweiller")

console.log("HERES FREDs INFORMATION", fred)

fred.walk()
console.log(fred.name)
console.log(fred.age)
console.log(fred.dogBreed)
console.log(fred.color)

//creating a horse class, overwriting the walk() method
class Horse extends Animal {
  constructor(name, age, color, isCountry) {
    super(name, age, color)
    this.isCountry = isCountry
  }

  walk() {
    console.log(this.name + " is galopando!")
  }
}

const myHorse = new Horse("Ted", 5, "black", true)

myHorse.walk()
fred.walk()

//PRIVATE AND STATIC

class People {
  //static property, only accessible through class Person
  static isLive = true
  //private property, not accessible from outside the class
  #address
  constructor(name, age, country) {
    this.name = name
    this.age = age
    this.country = country
    this.#address = "rua 90"
  }
  sayHello() {
    console.log("hello! my name is " + this.name)
  }
  //static method, only accessible through class Person
  static getStatus() {
    return this.isLive
  }
  //getter method to access private value
  get fullAddress() {
    return this.#address
  }
}

//creating an instance of the class Person
const someone = new People("someone", 25, "Brasil", "rua 90")

console.log(People.getStatus())

//returns the address which is private
console.log(someone.fullAddress)

//syntax error, address is private (returns undefined)
console.log(someone.address)
