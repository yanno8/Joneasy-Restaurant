let mongoose = require("mongoose");
const menuLines = require("../schemas/menuLines.schema")
let Schema = mongoose.Schema;

const foodRoundsSchema = new Schema(
    {
      menu_lines: [ menuLines ],
      range: {
        type: Number,
        require: true,
      },
      status: {
        type: String,
        enum: ["Pending", "Processing", "Served"],
        default: "Pending",
        require: true,
      },
    },
    {
      timestamps: true,
    }
  )

  module.exports = foodRoundsSchema;