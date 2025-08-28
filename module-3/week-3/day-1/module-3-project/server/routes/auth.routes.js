const router = require("express").Router();
const UserModel = require("../models/User.model");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { isAuthenticated } = require("../middlewares/jwt.middleware");
//first a /signup route that will check for the user email if the email is free then create the user
router.post("/signup", async (req, res) => {
  try {
    //check if the email already exists
    const foundUser = await UserModel.findOne({ email: req.body.email });
    if (foundUser) {
      res.status(403).json({ errorMessage: "Email already taken" });
    } else {
      //create the salt
      //create the hashed password
      //create the hashed user variable without the original password
      const theSalt = bcryptjs.genSaltSync(12);
      const theHashedPassword = bcryptjs.hashSync(req.body.password, theSalt);
      console.log("the salt", theSalt);
      console.log("the hashed password", theHashedPassword);
      console.log(req.body);
      const hashedUser = {
        ...req.body,
        password: theHashedPassword,
      };
      const createdUser = await UserModel.create(hashedUser);
      res
        .status(201)
        .json({ message: "User created successfully", createdUser });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("problem creating user");
  }
});
//second /login route to find the user by their email, and if exists compare the passwords and then if the passwords match .... they are logged in
router.post("/login", async (req, res) => {
  try {
    //find the person by their email
    const foundUser = await UserModel.findOne({ email: req.body.email });
    if (!foundUser) {
      res.status(500).json({ errorMessage: "invalid credentials" });
    } else {
      //if the email exist then compare the passwords
      const doesPasswordMatch = bcryptjs.compareSync(
        req.body.password,
        foundUser.password
      );
      if (!doesPasswordMatch) {
        res.status(500).json({ errorMessage: "invalid credentials" });
      } else {
        // ****************JWT token*************
        //first thing is to create the payload
        const payload = { _id: foundUser._id };
        //.sign method takes three arguments
        const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
          algorithm: "HS256",
          expiresIn: "6h",
        });

        res
          .status(200)
          .json({ message: "You are logged in! Nice work", authToken });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("problem signup user");
  }
});

//verify route
router.get("/verify", isAuthenticated, async (req, res) => {
  console.log("here in the verify route", req.headers);
  res.status(200).json({ message: "Token good", payload: req.headers.payload });
});

module.exports = router;
