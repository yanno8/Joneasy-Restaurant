const AllMeals = require("../models/allMeals.model")


const createAllMeals = async (req, res, next) => {
    try {
        const { picture_big_format, picture_small_format, category_id, created_by, name, price, type, is_portionable, non_billable, portions } = req.body;
        const allMeals = new AllMeals({
            picture_big_format: picture_big_format,
            picture_small_format: picture_small_format,
            category_id: category_id,
            created_by: created_by,
            name: name,
            price: price,
            type: type,
            is_portionable: is_portionable,
            non_billable: non_billable,
            portions: portions
        });
        const saveAllMeals = await allMeals.save();
        res.status(200).json(saveAllMeals);
    } catch (error) {
        res.status(500).json(error);
    }
}
module.exports  = { createAllMeals }