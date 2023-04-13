var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/test");
module.exports = mongoose;
// mongoose.connection
//   .once("open", () => console.log("connected"))
//   .on("error", () => console.log("error"));
// var user = require("./src/db/mongoose");
// module.exports = user;
// const first = new user({
//   description: "mongoose is awesome",
//   completed: false,
//   password: "123password         ",
// });
// first
//   .save()
//   .then(() => {
//     console.log(first);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
