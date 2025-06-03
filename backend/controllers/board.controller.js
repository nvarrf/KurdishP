const BoardModel = require('../models/board.model.js');
const PinModel = require('../models/pin.model.js');
const User = require('../models/user.model.js');

const getUserBoards = async (req, res) => {

    const { userId } = req.params;

    const boards = await BoardModel.find({ user: userId });

    const boardIwthPinDetials = await Promise.all(boards.map(async (board) => {


        const pinCount = await PinModel.countDocuments({ board: board._id });
        const firstItem = await PinModel.findOne({ board: board._id });

        return {
            ...board.toObject(),
            pinCount,

            firstItem,
        }

    }));

    return res.status(200).json(boardIwthPinDetials);







}

module.exports = { getUserBoards } 