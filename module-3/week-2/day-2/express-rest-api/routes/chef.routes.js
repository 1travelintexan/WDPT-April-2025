import { Router } from "express"
import ChefModel from "../models/Chef.model.js"

const router = Router()

router.post("/create", async (req, res) => {
  try {
    const { name, yearsOfXP } = req.body
    const created = await ChefModel.create({ name, yearsOfXP })

    return res.status(201).json({ msg: "Chef registered", created })
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
})

router.patch("/:id", async (req, res) => {
  try {
    const { name, yearsOfXP } = req.body
    const { id } = req.params
    const updated = await ChefModel.findByIdAndUpdate(id, { name, yearsOfXP })

    return res.status(201).json({ msg: "Chef registered", created })
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
})

router.get("/all", async (req, res) => {
  try {
    const chefs = await ChefModel.find()
    return res.status(200).json(chefs)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
})

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const chef = await ChefModel.findById(id)

    return res.status(200).json(chef)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const chefDeleted = await ChefModel.findByIdAndDelete(id)

    return res.status(200).json({ msg: "Chef deleted" })
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
})

export default router
