const express = require('express');
const app=express();

require("dotenv").config();
const PORT=process.env.PORT || 4000;

const cors = require('cors');
app.use(cors());

//cookie parser what is this and why we need this
const cookieParser=require("cookie-parser");
app.use(cookieParser());

app.use(express.json());
require("./config/database").connect();

//route import and mounting
const user=require("./routes/user");
app.use("/api/v1",user);

//activating
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});