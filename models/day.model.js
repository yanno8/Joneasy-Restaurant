let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const daySchema = new Schema(
    {
      label: {
        type: String,
        require: true,
      },
      week_range: {
        type: Number,
        require: true,
      },
    },
    {
      timestamps: true,
    }
  ),
  Day = mongoose.model("Day", daySchema);

module.exports = Day;