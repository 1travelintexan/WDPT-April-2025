//first to change things on the HTML, we need to 'grab' it
const bodyElement = document.querySelector("body");
const h1Element = document.querySelector("h1");
let showH1Element = true;
const h3Element = document.getElementById("header");
const pElement = document.querySelector(".p-tag");
const hideButtonElement = document.querySelector("#hide-btn");
const addRandomPetButtonElement = document.querySelector("#add-random-pet");
const changeBackgroundBtnElement = document.querySelector("#change-btn");
const petsDivContainerElement = document.querySelector("#pets-container");
h1Element.style.color = "red";

h3Element.style.color = "green";
pElement.style.color = "yellow";
console.log("hey yall", h1Element);

//this is an event listener that hides the H1 element
hideButtonElement.addEventListener("click", () => {
  if (showH1Element) {
    h1Element.style.display = "none";
    showH1Element = false;
  } else {
    h1Element.style.display = "block";
    showH1Element = true;
  }
});
//this is an event listener that changes the background color
changeBackgroundBtnElement.addEventListener("click", () => {
  //   bodyElement.classList.add("background-purple");
  //to remove a class is exactly the same... but not .add its .remove()
  //to toggle a class we use the 'toggle' method
  bodyElement.classList.toggle("background-purple");
});
//add event listener to add random pet
addRandomPetButtonElement.addEventListener("click", () => {
  const randomIndex = getRandomIndex();
  const randomPet = pets[randomIndex];
  const newSection = document.createElement("section");
  newSection.innerHTML = `
  <img src='${randomPet.image}' alt='pet image'/>
    <h4>${randomPet.name}</h4>
    <h5>Type: ${randomPet.type}</h5>
    <button class='delete-btn'>Delete</button>
    `;
  newSection.classList.add("pet-card");
  petsDivContainerElement.appendChild(newSection);

  const deleteBtn = newSection.querySelector(`.delete-btn`);
  deleteBtn.addEventListener("click", () => {
    console.log("clicked");
    newSection.remove();
  });

  //this removes the pet from the array
  pets.splice(randomIndex, 1);
});
function getRandomIndex() {
  return Math.floor(Math.random() * pets.length);
}
//create and element
const newH4Element = document.createElement("h4");
//change the innerText of the element
// newH4Element.innerText = "this is our element from JS :)";
//add the new element to the page with the .appendChild( ) method
bodyElement.appendChild(newH4Element);

//all the pets
const pets = [
  {
    name: "Ragnar",
    type: "Dog",
    image:
      "https://images.unsplash.com/photo-1455103493930-a116f655b6c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl0YnVsbHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Lupe",
    type: "Cat",
    image:
      "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8fDB8fHww",
  },
  {
    name: "Nala",
    type: "Dog",
    image:
      "https://images.unsplash.com/photo-1589469884538-4e5d63671b09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNtYWxsJTIwYnJvd24lMjBkb2d8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Gatiko",
    type: "Cat",
    image:
      "https://images.unsplash.com/photo-1472491235688-bdc81a63246e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0fGVufDB8fDB8fHww",
  },
];

//loop of the pets
pets.splice(0, 1).forEach((onePet) => {
  //**********Basic create element example ********* */
  //   //create a element
  //   const newElement = document.createElement("h5");
  //   //change the innertext to equal a pet
  //   newElement.innerText = onePet;
  //   //add the new element to the container that we created on the HTML
  //   petsDivContainerElement.appendChild(newElement);

  const newSection = document.createElement("section");
  newSection.innerHTML = `
  <img src='${onePet.image}' alt='pet image'/>
    <h4>${onePet.name}</h4>
    <h5>Type: ${onePet.type}</h5>
    <button class='delete-btn'>Delete</button>
    `;
  newSection.classList.add("pet-card");
  petsDivContainerElement.appendChild(newSection);
});
