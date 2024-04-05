const express = require("express");
const bcrypt = require("bcryptjs");
const { Owner, Society, Complaint, Resident } = require("../database/db");
const ownerRouter = express.Router();
const jwt = require("jsonwebtoken"); // Correct import for jsonwebtoken
const env = require("dotenv"); 
const { extractOwnerAndSocietyIds } = require("../Auth/OwnerAuthmiddleware");

ownerRouter.post("/signup", async (req, res) => {
  const body = req.body;
  const hashedPassword = await bcrypt.hash(body.password, 8);
  const username = body.username;
  const email = body.email;
  const contactNumber = body.contactNumber;
  const societyName = body.societyname;
  const societyaddress = body.societyaddress;

  const ownerFound = await Owner.findOne({ email });
  if (ownerFound) {
    return res.status(400).json({ error: "Owner already exists" });
  }

  try {
    // Create a new society
    const newSociety = new Society({
      societyname: societyName,
      address: societyaddress,
    });
    await newSociety.save();

    // Create a new owner and assign the _id of the newly created society
    const newOwner = new Owner({
      ownername: username,
      password: hashedPassword,
      email: email,
      contactNumber: contactNumber,
      society: newSociety._id, // Assign the _id of the newly created society
    });
      await newOwner.save();
      
      console.log("hi before jwt")

    // Generate JWT token
    const token =  jwt.sign(
      { id: newOwner._id },
      "Kunal GARG GG"// Use environment variable for JWT secret
    );

      res.status(201).json({
          "token": token,
          "society_key":newSociety._id
    });
  }
  catch (error) {
      console.log(error);
    res.status(501).json({"msg" : error});
  }
});

ownerRouter.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const ownerFound = await Owner.findOne({ email });
  if (!ownerFound) {
    return res.status(401).json({ error: "Wrong credentials" });
  } else {
    try {
      const validPassword = await bcrypt.compare(password, ownerFound.password);
      if (validPassword) {
        // Generate JWT token
        const token = jwt.sign(
          { id: ownerFound._id },
          "Kunal GARG GG"
        );
        return res.status(200).json({ token }); // Return token in response
      } else {
        return res.status(401).json({ error: "Wrong credentials" });
      }
    } catch (error) {
      return res.status(501).json({ error });
    }
  }
});


ownerRouter.get("/getIssues", extractOwnerAndSocietyIds, async (req, res) => {
  try {
    const owner = await Owner.findById(req.ownerId);

    if (!owner) {
      return res.status(404).json({ error: "Owner not found" });
    }

    // Get the societyId from the request
      const societyId = req.societyId;
      

    // Find the society using societyId
      const society = await Society.findById(societyId);
      console.log(society.complaint);
      console.log(society.residents);

    if (!society) {
      return res.status(404).json({ error: "Society not found" });
    }

    // Get all the complaints associated with the society
     const issues = await Complaint.find({ society: societyId });

    // Return the issues
    res.status(200).json({ issues });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = {
  ownerRouter
};
