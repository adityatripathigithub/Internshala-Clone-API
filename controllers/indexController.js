const { catchAsyncError } = require("../middlewares/catchAsyncErrors");
const Student = require("../models/studentModel");
const ErrorHeandler = require("../utils/ErrorHandler");
const { sendtoken } = require("../utils/SendToken");

exports.homepage = catchAsyncError(async (req, res, next) => {
    res.json({ message: "Secure Homepage!" });
});

exports.homepage = catchAsyncError(async (req, res, next) => {
    const student = await Student.findById(req.id).exec();
    res.json({ student });
});

exports.studentsignup = catchAsyncError(async (req, res, next) => {
    const student = await new Student(req.body).save();
    sendtoken(student, 201, res);
});

exports.studentsignin = catchAsyncError(async (req, res, next) => {
    const student = await Student.findOne({ email: req.body.email }).select("+password").exec();

    if (!student) return next(new ErrorHeandler("user not found with this email address", 404));

    const isMatch = student.comparepassword(req.body.password);

    if (!isMatch) return next(new ErrorHeandler("Wrong credientials", 500));

    sendtoken(student, 200, res);
});

exports.studentsignout = catchAsyncError(async (req, res, next) => {
    res.clearCookie("token");
    res.json({ message: "Successfully signout!" });
});
