const mongoose = require("mongoose");
exports.connect = () => {
    mongoose
        .connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("Connected to mongoose");
        })
        .catch((err) => {
            console.log(err);
            console.log("Not Connected");
            process.exit(1);
        });
};


