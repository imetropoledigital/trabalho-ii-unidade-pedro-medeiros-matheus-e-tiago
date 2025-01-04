const mongoose = require("mongoose");

const DATABASE_URI = "mongodb://localhost:27017/test";

const connect = async () => {
  await mongoose.connect(DATABASE_URI);
};

module.exports = {
  connect,
};
