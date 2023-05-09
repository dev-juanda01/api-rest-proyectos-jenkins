const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conexión a la base de datos establecida...");
  } catch (error) {
    console.log(`ERROR al conectarse a la base de datos ${error}`);
  }
};

module.exports = connectDB;
