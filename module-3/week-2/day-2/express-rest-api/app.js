import express from "express"
import morgan from "morgan"
import connectDB from "./db/db.connection.js"
import chefRouter from "./routes/chef.routes.js"
import recipeRouter from "./routes/recipe.routes.js"
import * as dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(express.json())
app.use(morgan("dev"))

app.get("/", async (req, res) => {
  try {
    return res.status(200).json("WERE GOOD")
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
})

app.use("/chef", chefRouter)
app.use("/recipe", recipeRouter)

app.listen(process.env.PORT, () => {
  console.log("server up and running on port:", process.env.PORT)
  connectDB()
})
