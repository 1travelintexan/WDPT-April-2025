import { Schema, model } from "mongoose"

const chefSchema = new Schema(
  {
    name: {
      type: String,
      minLength: 3,
      maxLength: 26,
      required: true,
      trim: true,
    },
    yearsOfXP: { type: Number, min: 1, max: 90, required: true },
    recipes: [{ type: Schema.Types.ObjectId, ref: "Recipe" }],
  },
  {
    timestamps: true,
  }
)

export default model("Chef", chefSchema)
