const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
const jwt = require("jsonwebtoken")
const secretKey ="thisismykey"


require("./connection/connect");

//middleware
app.use(express.json());
app.use(cors());



// routes
const route = require("./routes/Allroutes")


app.use("/",route)




const User = require("./models/Users"); // modle
const product = require("./models/products");








app.listen(port, () => console.log(`Example app listening on port ${port}!`));