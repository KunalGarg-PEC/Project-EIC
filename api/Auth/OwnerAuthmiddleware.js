const jwt = require('jsonwebtoken')
const express = require('express');

const extractOwnerAndSocietyIds = (req, res, next) => {
  // Extract JWT token and society ID from headers
  const token = req.headers.authorization;
  const societyId = req.headers.societyid;

  // If token or society ID is missing, return an error
  if (!token || !societyId) {
    return res.status(401).json({ error: 'Token or society ID missing' });
  }

  try {
    // Decode the JWT token
    const decoded = jwt.verify(token, "Kunal GARG GG");
    
    // Extract owner ID from the decoded payload
    const ownerId = decoded.id;
    
    // Set owner ID and society ID in the request object for further use
    req.ownerId = ownerId;
    req.societyId = societyId;

    // Call next middleware
    next();
  } catch (error) {
    // If token decoding fails, return an error
    return res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = {

    extractOwnerAndSocietyIds
};
