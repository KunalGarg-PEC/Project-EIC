const express = require('express');
const bcrypt = require('bcryptjs')
const ownerRouter = express.Router();


ownerRouter.post('/signup', async(req,res) => {
    const body = req.body;
    const hashedPassword = await bcrypt.hash(body.password, 8);
    const username



})