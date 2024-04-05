const { error } = require("console");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.connect(
  "mongodb+srv://gargkunal369:IOsMig1TwzObgcv1@real-estate.mnk9qws.mongodb.net/"
).then(() => {
    console.log("Database connected")
}).catch((error)=>{
    console.log(error)
});

// Define schema for Owner
const ownerSchema = new Schema({
  ownername: {
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
    type: Number,
    required: true,
  },
  society: { type: Schema.Types.ObjectId, ref: "Society", required: true },
});

// Define schema for Resident
const residentSchema = new Schema({
  residentname: {
    type: String,
    required: true,
    },
      password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  blockNumber:{
  type: Number,
  required: true,
    
  },
  roomNumber:{
    type: Number,
    required: true
    
  },
    society: { type: Schema.Types.ObjectId, ref: "Society" }, 
    complaint:[{type:Schema.Types.ObjectId, ref:"Complaint"}]
});

// Define schema for Society
const societySchema = new Schema({
  societyname: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
    },
  complaint:[{type:Schema.Types.ObjectId, ref:"Complaint"}],
  owner: [{type:Schema.Types.ObjectId, ref:"Owner"}],
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
