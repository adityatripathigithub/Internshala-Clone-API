exports.sendtoken = (student, statusCod, res) => {
    const token = student.getjwttoken();

    const options = {
        expires: new Date(date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),

        httpOnly: true,
        // secure: true,
    };

    res.status(statusCod).cookie("token", token, options).json({ success: true, id:student._id, token });

    res.json({ token });
};
