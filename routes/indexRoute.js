const express = require("express");
const { get } = require("mongoose");
const router = express.Router();

const { homepage, studentsignup, studentsignin, studentsignout } = require("../controllers/indexController");

// Get
router.get("/", homepage);

// Post student/signup
router.post("/student/signup", studentsignup);

// Post student/signin
router.post("/student/signin", studentsignin);

// get student/signout
router.get("/student/signout", studentsignout);

module.exports = router;
