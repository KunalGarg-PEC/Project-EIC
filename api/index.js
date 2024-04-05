const express = require('express');
 
const app = express();

app.use(express.json());
app.use('/api/v1/user',userRouter)
app.listen(3000, () => {
    console.log("server started");
})