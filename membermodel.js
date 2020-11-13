var mongoose = require("mongoose");

var memberSchema = mongoose.Schema(
  {
    // กำหนด ชื่อและชนิดของ document เรา
    realname: {
      type: String
    },
    surname: {
      type: String
    },
    birthdate: {
      type: String
    },
    univer: {
      type: String
    },
    faculty: {
      type: String
    },
    department: {
      type: String
    },
    email: {
      type: String
    }
  },
  {
    collection: "MEMBERS"
  }
);

var Member = mongoose.model("members", memberSchema);
module.exports = Member;