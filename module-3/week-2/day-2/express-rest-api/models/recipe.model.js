import { Schema, model } from "mongoose"

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      minLength: 3,
      maxLength: 48,
      required: true,
      trim: true,
    },
    ingredients: [String],
    creator: { type: Schema.Types.ObjectId, ref: "Chef" },
  },
  {
    timestamps: true,
  }
)

export default model("Recipe", recipeSchema)
