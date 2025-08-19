import mongoose from "mongoose"
//const mongoose = require("mongoose") // SAME AS ABOVE
export default async function connectDB() {
  try {
    const connection = await mongoose.connect(
      "mongodb://127.0.0.1:27017/mongoose-intro-db"
    )

    console.log(`connected to db: ${connection.connections[0].name}`)
  } catch (error) {
    console.log(error)
  }
}

//THIS instead of export default
// module.exports = connectDB
