const express = require('express');
const {userRouter} = require('./Routes/user')
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
app.use('/api/v1/user',userRouter)
app.listen(3000, () => {
    console.log("server started");
})