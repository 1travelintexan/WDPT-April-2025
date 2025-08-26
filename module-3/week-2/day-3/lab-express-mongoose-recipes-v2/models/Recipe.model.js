//first we need the Schema and the model from mongoose
const { Schema, model } = require("mongoose");

// create a schema
const recipeSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    enum: ["Easy Peasy", "Amatuer Chef", "UltraPro Chef"],
  },
  ingredients: [String],
  image: {
    type: String,
    default: "https://images.media-allrecipes.com/images/75131.jpg",
  },
  duration: {
    type: Number,
    min: 0,
  },
  isArchived: {
    type: Boolean,
    default: false,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

//after you have the shape you create the model
const RecipeModel = model("recipes", recipeSchema);
//export the model to use in other files
module.exports = RecipeModel;
