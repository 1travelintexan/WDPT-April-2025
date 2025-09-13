const router = require("express").Router();
const PetModel = require("../models/Pet.model");
const UserModel = require("../models/User.model");
const uploader = require("../middlewares/cloudinary.config");
//route to add a new pet the DB and then... add that created pet to the array of an existing user
router.post(
  "/create-a-pet/:userId",
  uploader.single("imageUrl"),
  async (req, res) => {
    console.log("req.file:", req.file);
    try {
      //this creates the pet first
      const createdPet = await PetModel.create({
        ...req.body,
        owner: req.params.userId,
        image: req.file?.path,
      });
      //updates the user to have the pet in the array
      const updatedUser = await UserModel.findByIdAndUpdate(
        req.params.userId,
        { $push: { pets: createdPet._id } },
        { new: true }
      );
      res.status(201).json({ createdPet, updatedUser });
    } catch (error) {
      console.log(error);
      res.status(500).json("problem creating a pet ");
    }
  }
);

//route to find all pets for a given user
router.get("/user-pets/:userId", async (req, res) => {
  try {
    const foundUser = await UserModel.findById(req.params.userId).populate(
      //inside the .populate you can give a second argument of fields that you want returned
      "pets",
      "name age"
    );
    res.status(200).json(foundUser.pets);
  } catch (error) {
    console.log(error);
    res.status(500).json("problem find a pet ");
  }
});

module.exports = router;
