const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const app = express();
//import the model
const RecipeModel = require("./models/Recipe.model");
// MIDDLEWARE
app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.json());

// Iteration 1 - Connect to MongoDB
// DATABASE CONNECTION
const MONGODB_URI = "mongodb://127.0.0.1:27017/express-mongoose-recipes-dev";

mongoose
  .connect(MONGODB_URI)
  .then((x) => console.log(`Connected to the db, nice work`))
  .catch((err) => console.error("Error connecting to mongo", err));

// ROUTES
//  GET  / route - This is just an example route
app.get("/", (req, res) => {
  res.send("<h1>LAB | Express Mongoose Recipes</h1>");
});

//  Iteration 3 - Create a Recipe route
//  POST  /recipes route
app.post("/recipes", async (req, res) => {
  console.log(req.body);
  try {
    const newRecipe = await RecipeModel.create(req.body);
    res.status(201).json(newRecipe);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error, message: "problem creating recipe" });
  }
});
//  Iteration 4 - Get All Recipes
//  GET  /recipes route
app.get("/recipes", async (req, res) => {
  try {
    const allRecipes = await RecipeModel.find();
    res.status(200).json(allRecipes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error, message: "problem getting all recipes" });
  }
});

//  Iteration 5 - Get a Single Recipe
//  GET  /recipes/:id route
app.get("/recipes/:recipeId", async (req, res) => {
  console.log("the params", req.params);
  const theRecipeId = req.params.recipeId;
  //fancy destructure
  const { recipeId } = req.params;
  try {
    const oneRecipe = await RecipeModel.findById(recipeId);
    res.status(200).json(oneRecipe);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error, message: "problem getting one recipe" });
  }
});

//  Iteration 6 - Update a Single Recipe
//  PUT  /recipes/:id route
app.put("/recipes/:recipeId", async (req, res) => {
  try {
    const updatedRecipe = await RecipeModel.findByIdAndUpdate(
      req.params.recipeId,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedRecipe);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error, message: "problem updating one recipe" });
  }
});

//  Iteration 7 - Delete a Single Recipe
//  DELETE  /recipes/:id route
app.delete("/recipes/:recipeId", async (req, res) => {
  const theRecipeId = req.params.recipeId;
  try {
    const deletedRecipe = await RecipeModel.findByIdAndDelete(theRecipeId);
    res.status(200).json(deletedRecipe);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error, message: "problem deleting one recipe" });
  }
});

// Start the server
app.listen(3000, () => console.log("My first app listening on port 3000!"));

//❗️DO NOT REMOVE THE BELOW CODE
module.exports = app;
