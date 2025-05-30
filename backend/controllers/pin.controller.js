const pinModel = require("../models/pin.model");



const getPins = async (req, res) => {
    const pins = await pinModel.find();
    res.status(200).json(pins);

}

module.exports = { getPins } 