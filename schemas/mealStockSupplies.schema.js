let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const mealStockSuppliesSchema = new Schema(
    {
      mealStock_id: {
        type: Schema.Types.ObjectId,
        ref: "MealStock",
        require: true,
      },
      purchase_id: {
        type: Schema.Types.ObjectId,
        ref: "Purchase",
        require: true,
      },
      economat_id: {
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true,
      },
      quantity: {
        type: Number,
        require: true,
      },
      remaining_quantity: {
        type: Number,
        require: true,
      },
      relaod_date: {
        type: Date,
        default: Date.now(),
        require: true,
      },
    },
    {
      timestamps: true,
    }
  )

  module.exports = mealStockSuppliesSchema;