var mongoose = require("mongoose");

var topicSchema = mongoose.Schema(
  {
    // กำหนด ชื่อและชนิดของ document เรา
    title: {
      type: String
    },
    detail: {
      type: String
    },
    subject: {
        type: String
    },
    email: {
        type: String
    },
    fileUrl: {
      type: String
    }
  },
  {
    collection: "TOPICS"
  }
);

var Topic = mongoose.model("topics", topicSchema);
module.exports = Topic;