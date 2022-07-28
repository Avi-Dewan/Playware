const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors()); //cors allow us to make request from our own front end to our api on same local machine
app.use(express.json());




const userRouter = require("./routes/User");
app.use("/auth", userRouter);


app.listen(3001, () => {
console.log("Yey, your server is running on port 3001");
});