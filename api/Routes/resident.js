const express = require("express");
const residentRouter = express.Router();
const bcrypt = require("bcryptjs");
const { Owner, Society, Complaint, Resident } = require("../database/db");
const jwt = require("jsonwebtoken"); // Correct import for jsonwebtoken
const env = require("dotenv");
const {authenticateResident} = require('../Auth/ResidentAuthMw')

residentRouter.post("/signup", async (req, res) => {
  const body = req.body;
  const hashedPassword = await bcrypt.hash(body.password, 8);
  const residentname = body.residentname;
  const email = body.email;
  const contactNumber = body.contactNumber;
  const societyId = body.societyid;
  const roomNumber = body.roomNumber;
  const blockNumber = body.blockNumber;

  const residentFound = await Resident.findOne({ email });
  if (residentFound) {
    return res.status(400).json({ error: "Resident already exists" });
  }

  try {
    // Create a new resident
    const newResident = new Resident({
      residentname: residentname,
      password: hashedPassword,
      email: email,
      contactNumber: contactNumber,
      blockNumber: blockNumber,
      roomNumber: roomNumber,
      society: societyId,
    });

    // Save the new resident to the database
    await newResident.save();

    // Update the residents array of the society with the new resident ID
    await Society.findByIdAndUpdate(
      societyId,
      { $push: { residents: newResident._id } },
      { new: true }
    );

    // Generate JWT token
    const token = jwt.sign({ id: newResident._id }, "Kunal GARG GG");

    res.status(201).json({
      token,
      societyid: societyId,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

residentRouter.post("/signin", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const residentFound = await Resident.findOne({ email });
  if (!residentFound) {
    return res.status(401).json({ error: "Wrong credentials" });
  } else {
    try {
      const validPassword = await bcrypt.compare(password, residentFound.password);
      if (validPassword) {
        // Generate JWT token
        const token = jwt.sign(
          { id: residentFound._id },
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

residentRouter.get(
  "/complaint/:complaintToken",
  authenticateResident,
  async (req, res) => {
    try {
      const complaintToken = req.params.complaintToken;
      const residentId = req.residentId;

      // Find the complaint by the complaint token and resident ID
      const complaint = await Complaint.findOne({
        _id: complaintToken,
        resident: residentId,
      });

      if (!complaint) {
        return res.status(404).json({ error: "Complaint not found" });
      }

      // Return the complaint details
      res.status(200).json({ complaint });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);


residentRouter.post("/complaints", authenticateResident, async (req, res) => {
  try {
    const { title, description } = req.body;
    const societyId = req.societyId;
    const residentId = req.residentId;

    // Create a new complaint
    const newComplaint = new Complaint({
      title,
      description,
      society: societyId,
      resident: residentId,
    });

    // Save the new complaint to the database
    await newComplaint.save();

    // Update the complaints array of the resident with the new complaint ID
    await Resident.findByIdAndUpdate(
      residentId,
      { $push: { complaint: newComplaint._id } },
      { new: true }
    );

    // Update the complaints array of the society with the new complaint ID
    await Society.findByIdAndUpdate(
      societyId,
      { $push: { complaint: newComplaint._id } },
      { new: true }
    );

    res.status(201).json({
      message: "Complaint created successfully",
      complaintToken: newComplaint._id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});



module.exports = {
    residentRouter
}