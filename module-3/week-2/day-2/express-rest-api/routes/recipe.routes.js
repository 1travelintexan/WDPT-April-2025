import { Router } from "express"
import recipeModel from "../models/recipe.model.js"
import ChefModel from "../models/Chef.model.js"

const router = Router()

router.post("/create", async (req, res) => {
  try {
    const { title, ingredients, creator } = req.body
    const ingredientsArr = ingredients.split(",")
    const trimmed = ingredientsArr.map((el) => el.trim(""))

    const createdRecipe = await recipeModel.create({
      title,
      ingredients: trimmed,
      creator,
    })

    await ChefModel.findByIdAndUpdate(creator, {
      $push: { recipes: createdRecipe },
    })

    return res.status(201).json(createdRecipe)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
})

router.get("/", async (req, res) => {
  try {
    const recipes = await recipeModel.find()
    return res.status(200).json(recipes)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
})

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const singleRecipe = await recipeModel.findById(id)
    return res.status(200).json(singleRecipe)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
})

//GET RECIPES BY CREATOR/CHEF
//POPULATE CREATOR
router.get("/chef/:chefId", async (req, res) => {
  try {
    const { chefId } = req.params
    const singleRecipe = await recipeModel
      .find({ creator: chefId })
      .populate("creator")

    return res.status(200).json(singleRecipe)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
})

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const { title, ingredients } = req.body

    const updated = await recipeModel.findByIdAndUpdate(id, {
      title,
      ingredients,
    })
    return res.status(200).json(updated)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params

    const recipe = await recipeModel.findById(id)
    if (!recipe) {
      return res.status(404).json({ msg: "recipe not found" })
    }

    await ChefModel.findByIdAndUpdate(recipe.creator, {
      $pull: { recipes: id },
    })

    await recipeModel.findByIdAndDelete(id)

    return res.status(200).json({ msg: "deleted succesfuly" })
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
})

export default router
