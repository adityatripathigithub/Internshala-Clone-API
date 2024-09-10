require("dotenv").config({ path: "./.env" });
const express = require("express");
const app = express();

// db connect

require("./models/database").connectDatabse();

//logger

const logger = require("morgan");
app.use(logger("tiny"));

// bodyparser

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/", require("./routes/indexRoute"));

//error hendling

// const { genetatedErrors } = require("./middlewares/errors");
const ErrorHeandler = require("./utils/ErrorHandler");

app.all("*", (req, res, next) => {
    next(new ErrorHeandler(`Requested URL Not Found ${req.url}`, 404));
    // next(new ErrorHeandle());
});

// app.use(genetatedErrors)

app.listen(process.env.PORT, console.log(`server running on port ${process.env.PORT}`));
