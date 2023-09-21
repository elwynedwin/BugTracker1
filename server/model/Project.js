const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");

const projectSchema = new Schema({
  projectName: {
    type: String,
    required: true,
  },
  projectDescription: {
    type: String,
  },
  // adminUserId: {
  //   type: User.Types.ObjectId,
  //   required: true,
  // },
  team: [{ type: String, required: true }],
});

module.exports = mongoose.model("Project", projectSchema);
