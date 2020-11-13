var mongoose = require("mongoose");

var sessionSchema = mongoose.Schema(
  {
    // กำหนด ชื่อและชนิดของ document เรา
    email: {
      type: String
    }
  },
  {
    collection: "SESSIONS"
  }
);

var Session = mongoose.model("sessions", sessionSchema);
module.exports = Session;