const express = require("express");
const { homepage,studentsignup } = require("../controllers/indexController");
const router = express.Router();

router.get("/",homepage);


router.post("/student/signup", studentsignup);


module.exports = router;
