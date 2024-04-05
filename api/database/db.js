const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define schema for Owner
const ownerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  society: { type: Schema.Types.ObjectId, ref: "Society", required: true },
});

// Define schema for Resident
const residentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  society: { type: Schema.Types.ObjectId, ref: "Society" },
});

// Define schema for Society
const societySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  owners: [{ type: Schema.Types.ObjectId, ref: "Owner" }],
  residents: [{ type: Schema.Types.ObjectId, ref: "Resident" }],
});

const complaintSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  society: { type: Schema.Types.ObjectId, ref: "Society" },
  resident: { type: Schema.Types.ObjectId, ref: "Resident" },
  createdAt: {
    type: Date,
    default: Date.now, 
  },
});

// Create models
const Owner = mongoose.model("Owner", ownerSchema);
const Resident = mongoose.model("Resident", residentSchema);
const Society = mongoose.model("Society", societySchema);
const Complaint = mongoose.model("Complaint", complaintSchema);

module.exports = { Owner, Resident, Society, Complaint };
