const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const petSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: Number,
    type: {
      type: String,
      enum: ["Cat", "Dog", "Bird", "Reptile"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Pet = model("Pets", petSchema);

module.exports = Pet;
