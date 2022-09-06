const mongoose = require("mongoose");
const localUrl = "mongodb://localhost:27017/ropstam-task";

exports.connect = () => {
  mongoose
    .connect(localUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
};
