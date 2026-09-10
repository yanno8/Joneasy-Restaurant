const Day = require("../models/day.model")


const createDay = async (req, res, next) => {
    try {
        const { label, week_range } = req.body;
        const day = new Day({ 
            label: label,
            week_range: week_range
        });
        const saveDay = await day.save();
        res.status(200).json(saveDay);
    } catch (error) {
        res.status(500).json(error);
    }
}
module.exports  = { createDay }