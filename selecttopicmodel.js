var mongoose = require("mongoose");

var selecttopicSchema = mongoose.Schema(
  {
    // กำหนด ชื่อและชนิดของ document เรา
    title: {
      type: String
    }
  },
  {
    collection: "SELECTTOPICS"
  }
);

var Selectopic = mongoose.model("selecttopics", selecttopicSchema);
module.exports = Selectopic;