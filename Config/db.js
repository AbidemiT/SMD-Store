const mongoose = require("mongoose");
const config = require("config");

const connectDB = () => {
    mongoose.connect(config.get("mongoURI"), {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("MongoDB Connected");
    }).catch(err => {
        console.log(err);
    })
}

module.exports = connectDB;