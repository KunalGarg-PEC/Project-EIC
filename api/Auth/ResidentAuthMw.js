const jwt = require("jsonwebtoken");
const { Resident } = require("../database/db");

const authenticateResident = async (req, res, next) => {
  // Extract JWT token from headers
  const token = req.headers.authorization;

  // Extract society ID from headers

  // If token or society ID is missing, return an error
  if (!token) {
    return res.status(401).json({ error: "Token or society ID missing" });
  }

  try {
    // Decode the JWT token
    const decoded = jwt.verify(token, "Kunal GARG GG");

    // Extract resident ID from the decoded payload
    const residentId = decoded.id;

    // Get the resident from the database to fetch the society ID
    const resident = await Resident.findById(residentId);

    // If resident not found, return an error
    if (!resident) {
      return res.status(404).json({ error: "Resident not found" });
    }

    // Extract society ID from the resident
    const societyId = resident.society;

    // Set resident ID and society ID in the request object for further use
    req.residentId = residentId;
    req.societyId = societyId;

    // Call next middleware
    next();
  } catch (error) {
    // If token decoding fails, return an error
    return res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = {
  authenticateResident,
};
