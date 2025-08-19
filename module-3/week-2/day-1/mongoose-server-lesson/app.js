import express from "express"
import connectDB from "./config/db.config.js"
import morgan from "morgan"
import Recipe from "./models/recipe.model.js"

const app = express()

app.use(express.json())
app.use(morgan("dev"))

//check if server is up
app.get("/", (req, res) => {
  res.json("HELLO WERE GOOD")
})

// get all recipes from DB
app.get("/recipe", async (req, res) => {
  try {
    const recipes = await Recipe.find()

    return res.status(200).json(recipes)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: "error getting all recipes", error })
  }
})

//get a single recipe by id
app.get("/recipe/:id", async (req, res) => {
  try {
    const { id } = req.params
    const recipe = await Recipe.findById(id)
    return res.status(200).json(recipe)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
})

//create a recipe object in DB
app.post("/recipe", async (req, res) => {
  try {
    const { title, level, ingredients, instructions, duration, image } =
      req.body

    const createdRecipe = await Recipe.create({
      title,
      level,
      ingredients,
      instructions,
      duration,
      image,
    })
    return res
      .status(201)
      .json({ msg: "Recipe created succesfully", recipe: createdRecipe })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: "error creating recipe", error: error })
  }
})

//update an object in DB
app.patch("/recipe/:id", async (req, res) => {
  try {
    const { id } = req.params
    const updated = await Recipe.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    })

    return res.status(200).json({ msg: "updated succesfully", updated })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: "error updating recipe", error })
  }
})

//delete recipe by id

app.delete("/recipe/:id", async (req, res) => {
  try {
    const { id } = req.params
    const recipe = await Recipe.findByIdAndDelete(id)

    return res.status(200).json({ msg: "deleted succesfully" })
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
})

app.listen(8080, () => {
  console.clear()
  console.log("server is running on port 8080")
  connectDB()
  //mongoose.connect("mongodb://127.0.0.1:27017/mongoose-intro-db")
  // .then((connection) => console.log(connection.connections[0].name))
  //this instead of creating connection function in dif file
})
