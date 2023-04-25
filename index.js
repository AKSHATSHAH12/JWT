const express = require("express");
//const { post } = require("./routes/auth");
const auth = require("./routes/auth")
const post = require("./routes/post")
const app = express();
app.use(express.json())

app.use("/auth", auth);
app.use("/posts", post);

app.get("/", (req,res)=>{
    res.send("Hi I am working")
})




app.listen(9003,()=>{
    console.log("now running on port 9003")
})