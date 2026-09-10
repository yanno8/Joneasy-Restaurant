let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const allmealsSchema = new Schema(
    {
      picture_big_format: {
        type: String,
        require: true,
      },
      picture_small_format: {
        type: String,
        require: true,
      },
      category_id: {
        type: Schema.Types.ObjectId,
        ref: "FoodCategories",
        require: true,
      },
      created_by: {
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true,
      },
      name: {
        type: String,
        require: true,
      },
      price: {
        type: Number,
        require: true,
      },
      type: {
        type: String,
        enum: ["Main Meal", "Addon", "Extra"], 
        require: true,
      },
      is_portionable: {
        type: Boolean,
        default: false,
        require: true,
      },
      non_billable: {
        type: Boolean,
        default: false,
        require: true,
      },
      portions: [
        {
          type: String,
          require: true,
        }
      ],
    },
    {
      timestamps: true,
    }
  ),
  AllMeals = mongoose.model("AllMeals", allmealsSchema);

module.exports = AllMeals;