const pinModel = require("../models/pin.model.js");
const userModel = require("../models/user.model.js");


const getPins = async (req, res) => {

    const pageNumber = Number(req.query.cursor || 0);
    const search = req.query.search || "";
    const userId = req.query.userId;
    const boardId = req.query.boardId;
    const limit = 21;

    const pins = await pinModel.find(
        search ? {
            $or: [
                { title: { $regex: search, $options: "i" } },
                { tags: { $in: [search] } }
            ]

        } : userId ?
            { user: userId }
            : boardId ? {
                board: boardId
            } : {}
    )
        .limit(limit).skip(limit * pageNumber);

    const hasNextPage = pins.length === limit;

    res.status(200).json({ pins, nextCursor: hasNextPage ? pageNumber + 1 : null });

}




const getPin = async (req, res) => {

    const pin = await pinModel.findById(req.params.id).populate("user", "username img name");
    res.status(200).json(pin);

}

module.exports = { getPins, getPin } 