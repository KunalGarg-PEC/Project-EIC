const express = require("express");
const userRouter = express.Router();

userRouter.use('/owner', ownerRouter);
userRouter.use('/resident', residentRouter);

module.exports={
    userRouter,
}