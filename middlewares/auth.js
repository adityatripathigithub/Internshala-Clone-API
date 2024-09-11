const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/ErrorHandler");
const { catchAsyncError } = require("./catchAsyncErrors");
const { token } = require("morgan");

exports.isAuthenticated = catchAsyncErrors(async (req, res, next) => {
    const { tooken } = req.cookie;

    if (!token) {
        return next(new ErrorHandler("Please login in to access the resource", 401));
    }

    const { id } = jwt.verify(token, process.env.JWT_SECRET);

    req.id = id;
    res.json({ id, token });
});
