// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");

exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);
//***********delete button ************/
//after adding to the page, now we grab the delete button
const deleteBtn = exampleRow.querySelector(".btn-delete");
//after you grab the button, you need to add a listener to it
deleteBtn.addEventListener("click", () => {
  console.log("delete clicked");
  exampleRow.remove();
});
//*************Like button ************/
const likeBtn = exampleRow.querySelector(".btn-like");
likeBtn.addEventListener("click", () => {
  console.log("like clicked", likeBtn.classList);
  likeBtn.classList.toggle("selected");
});
// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
threeContacts.forEach((oneContact) => {
  const exampleRow = document.createElement("tr");
  exampleRow.innerHTML = `
  <td>
    <img src="${oneContact.pictureUrl}" />
  </td>
  <td> ${oneContact.name} </td>
  <td> ${oneContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like ">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

  tableBody.appendChild(exampleRow);

  //***********delete button ************/
  //after adding to the page, now we grab the delete button
  const deleteBtn = exampleRow.querySelector(".btn-delete");
  //after you grab the button, you need to add a listener to it
  deleteBtn.addEventListener("click", () => {
    console.log("delete clicked");
    exampleRow.remove();
  });

  //*************Like button ************/
  const likeBtn = exampleRow.querySelector(".btn-like");
  likeBtn.addEventListener("click", () => {
    console.log("like clicked", likeBtn.classList);
    likeBtn.classList.toggle("selected");
  });
});

//add random contact button
buttonAddRandom.addEventListener("click", () => {
  //syntax for a random index in JS
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const randomPerson = contacts[randomIndex];
  //after finding the random person, remove them from the array
  contacts.splice(randomIndex, 1);

  //add the random person the the DOM
  const exampleRow = document.createElement("tr");

  exampleRow.innerHTML = `
  <td>
    <img src="${randomPerson.pictureUrl}" />
  </td>
  <td> ${randomPerson.name} </td>
  <td> ${randomPerson.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

  tableBody.appendChild(exampleRow);
  //***********delete button ************/
  //after adding to the page, now we grab the delete button
  const deleteBtn = exampleRow.querySelector(".btn-delete");
  //after you grab the button, you need to add a listener to it
  deleteBtn.addEventListener("click", () => {
    console.log("delete clicked");
    exampleRow.remove();
  });

  //*************Like button ************/
  const likeBtn = exampleRow.querySelector(".btn-like");
  likeBtn.addEventListener("click", () => {
    console.log("like clicked", likeBtn.classList);
    likeBtn.classList.toggle("selected");
  });
});
