const express = require("express");
const userRouter = express.Router();
const {ownerRouter} = require('./owner');
const {residentRouter} = require('./resident');

userRouter.use('/owner', ownerRouter);
userRouter.use('/resident', residentRouter);

module.exports={
    userRouter,
}