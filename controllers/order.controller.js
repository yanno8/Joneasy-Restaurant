const Order = require("../models/order.model")


const createOrder = async (req, res, next) => {
    try {
        const { organisation_id, table_id, food_rounds } = req.body;
        const order = new Order({ 
            organisation_id: organisation_id,
            table_id: table_id,
            food_rounds: food_rounds
        });
        const saveOrder = await order.save();
        res.status(200).json(saveOrder);
    } catch (error) {
        res.status(500).json(error);
    }
}
module.exports  = { createOrder }