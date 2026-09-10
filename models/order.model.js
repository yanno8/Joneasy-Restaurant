let mongoose = require("mongoose");
const foodRounds = require("../schemas/foodRounds.schema")
let Schema = mongoose.Schema;

const orderSchema = new Schema(
    {
      organisation_id: {
        type: Schema.Types.ObjectId,
        ref: "Organisation",
        require: true,
      },
      table_id: {
        type: Schema.Types.ObjectId,
        ref: "Table",
        require: true,
      },
      food_rounds: [ foodRounds ],
    },
    {
      timestamps: true,
    }
  ),
  Order = mongoose.model("Order", orderSchema);

module.exports = Order;