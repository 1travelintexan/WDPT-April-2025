//this is our server :)
//first thing is to require or 'import' the express package
const express = require("express");
const app = express();
//create a variable named path
const path = require("path");
//morgan example
const morgan = require("morgan");

//import json data from the pets.json
const petData = require("./pets.json");

//create a middleware with app.use
app.use(morgan("dev"));
//to accept POST requests from a client
app.use(express.json());
//middleware for our static/public files
app.use(express.static("public"));

//***************routes*************
//route needs two things, first is the 'path' and the second is a callback function
app.get("/pizzas", (req, res) => {
  //sendFile needs an absolute path and relative, so we need the __dirname variable which gives the absolute path in our computer to where we are
  //   res.sendFile(__dirname + "/pages/pizzas.html");
  res.sendFile(path.join(__dirname, "/pages/pizzas.html"));
});
//get route to show the pets page
app.get("/pets", (req, res) => {
  //this sends an html file with styles already
  // res.sendFile(path.join(__dirname, "/pages/pets.html"));
  //send json data rather than an html file
  res.status(200).json(petData);
});
//get route to show the about page
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/pages/about.html");
});

// dynamic route to get one specific pet
app.get("/pets/:petId", (req, res) => {
  //js to filter the petData by the id in the URL
  const foundPet = petData.pets.find((onePet) => {
    if (onePet.id === Number(req.params.petId)) {
      return true;
    }
  });
  console.log(req.params.petId, foundPet);
  res.status(200).json(foundPet);
});

//second thing to do after creating the variable for the app is start the server
//the .listen method expects a port and an optional callback function
app.listen(5005, () => {
  console.log("hey your server is running, nice work");
});
