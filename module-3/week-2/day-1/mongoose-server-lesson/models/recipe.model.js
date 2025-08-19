import { Schema, model } from "mongoose"
// const mongoose = require("mongoose")
// const Schema = mongoose.schema
const recipeSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    instructions: { type: [String], required: true },
    level: { type: String, enum: ["Easy", "Medium", "Hard"], default: "Easy" },
    ingredients: [String], // {type: [String], required.....}
    image: { type: String },
    duration: { type: Number, min: 1, max: 1440 },
  },
  {
    timestamps: true,
  }
)

//                     V this string reference always has to be capitalized and singular
export default model("Recipe", recipeSchema)
// module.exports = model("recipe", recipeSchema)
