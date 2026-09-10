let mongoose = require("mongoose");
const purchase = require("../schemas/purchase.schema");
const menuCatalog = require("../schemas/menuCatalogs.schema");
const foodCategories = require("../schemas/foodCategories.schema");
const menu = require("../schemas/menu.schema");
const mealStockSupplies = require("../schemas/mealStockSupplies.schema");
let Schema = mongoose.Schema;

const organisationSchema = new Schema(
    {
      _id: {
        type: Schema.Types.ObjectId,
        unique: true,
        require: true,
      },
      user_id: {
        type: Schema.Types.ObjectId,
        unique: true,
        require: true,
      },
      type_id: {
        type: Schema.Types.ObjectId,
        unique: true,
        require: true,
      },
      mercand_code: {
        type: String,
        require: true,
      },
      purchases: [ purchase ],
      mealStockSupplies: [ mealStockSupplies ],
      all_meals: [ {
        type: Schema.Types.ObjectId,
        ref: "AllMeals",
        require: true,
      } ],
      menus: [ menu ],
      menu_catalogs: [ menuCatalog ],
      food_categories: [ foodCategories ],
    },
    {
      timestamps: true,
    }
  ),
  Organisation = mongoose.model("Organisation", organisationSchema);

module.exports = Organisation;