const mongoose = require("mongoose");

const studentmodel = new mongoose.Schema(
    {
        email: {
            type: String,
            unique: true,
            require: [true, "Email is required"],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"],
        },
        password: {
            type: String,
            select: false,
            maxLength: [15, "Password Should not exceed mor then 15 characters"],
            minLength: [15, "Password Should have atleast 6 characters"],
            // match:[]
        },
    },
    { timestamps: true }
);

const student = mongoose.model("student", studentmodel);

module.exports = student;
