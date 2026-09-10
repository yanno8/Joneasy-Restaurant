let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const foodCategoriesSchema = new Schema(
    {
      organisation_id: {
        type: Schema.Types.ObjectId,
        ref: "Organisation",
        require: true,
      },
      label: {
        type: String,
        require: true,
      },
    },
    {
      timestamps: true,
    }
  )
  
  module.exports = foodCategoriesSchema;