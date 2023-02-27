require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const port = process.env.PORT || 8000;

const app = express();

// Routes
const authRouter = require("./src/routes/auth");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", authRouter);

app.listen(port, () => {
    console.log('Aplicação rodando na porta ' + port)
});