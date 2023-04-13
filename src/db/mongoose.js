var mongoose = require("mongoose");
const user = mongoose.model("users", {
  description: {
    type: String,
    trim: true,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
    validate(value) {
      if (1) {
        console.log(value);
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 7,
    validate(value) {
      if (value.includes("password")) {
        throw new Error("password can not contains password");
      }
    },
  },
});
module.exports = user;
