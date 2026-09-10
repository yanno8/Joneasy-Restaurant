let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const menuLinesSchema = new Schema(
    {
      meals: [
        {
          type: Schema.Types.ObjectId,
          ref: "AllMeals",
          require: true,
        }
      ],
      addons: [
        {
          type: Schema.Types.ObjectId,
          ref: "AllMeals",
          require: true,
        }
      ],
      extras: [
        {
          type: Schema.Types.ObjectId,
          ref: "AllMeals",
          require: true,
        }
      ],
      menu_id: {
        type: Schema.Types.ObjectId,
        ref: "Menu",
        require: true,
      },
      isAddonFree: {
        type: Boolean,
        default: false,
        require: true,
      },
      max_addons_free: {
        type: Number,
        default: 0,
        require: true,
      },
      isExtraFree: {
        type: Boolean,
        default: false,
        require: true,
      },
      max_extras_free: {
        type: Number,
        default: 0,
        require: true,
      },
      menu_composition: {
        type: String,
        require: true,
      },
      customer_can_choose_addons: {
        type: Boolean,
        default: false,
        require: true,
      },
      package_price: {
        type: Number,
        require: true,
      },
      should_fix_price: {
        type: Boolean,
        default: false,
        require: true,
      },
      cumulative_price: {
        type: Number,
        require: true,
      },
      consumed_supply: [ {
        type: String,
        require: true,
      } ],
      range: {
        type: Number,
        require: true,
      },
    },
    {
      timestamps: true,
    }
  )

  module.exports = menuLinesSchema;