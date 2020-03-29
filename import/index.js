const UserImport = require("./user").UserImport;
const Mongodb = require("../utils/mongodb");
const mongoose = require("mongoose");

const main = async () => {
  await Mongodb.connect();
  await UserImport.main();
  mongoose.connection.close();
};

main();
