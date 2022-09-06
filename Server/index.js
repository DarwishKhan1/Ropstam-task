const express = require("express");
const app= express();
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");
require("./config/db").connect();
require("dotenv").config();

app.use(bodyParser.json());
app.use(cors());

app.use("/api", routes);

app.get("/",(req, res) => {
    res.send("Welcome to Ropstam MERN Task");
})

const PORT = process.env.PORT | 5000;
app.listen(PORT, () =>{
    console.log(`Listening on port: ${PORT}`);
})