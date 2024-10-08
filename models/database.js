const mongoose = require("mongoose");

exports.connectDatabse = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(`Database Connect Established!`);
    } catch (error) {
        console.log(error.message);
    }
};
