let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const purchaseSchema = new Schema(
    {
      expenseNature: {
        type: String,
        require: true,
      },
      amount: {
        type: String,
        require: true,
      },
      date: {
        type: Date,
        require: true,
      },
      form: {
        type: String,
        require: true,
      },
      receipt: {
        type: String,
        require: true,
      },
      description: {
        type: String,
        require: true,
      },
      register_by: {
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true,
      },
    },
    {
      timestamps: true,
    }
  )

  module.exports = purchaseSchema;