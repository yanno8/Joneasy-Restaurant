let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const menuCatalogSchema = new Schema(
    {
      organisation_id: [
        {
          type: Schema.Types.ObjectId,
          ref: "Organisation",
          require: true,
        }
      ],
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
      day_id: {
        type: Schema.Types.ObjectId,
        ref: "Day",
        require: true,
      },
    },
    {
      timestamps: true,
    }
  )

  module.exports = menuCatalogSchema;