const commentModel = require('../models/comment.model.js');

const getPostComments = async (req, res) => {

    const { postId } = req.params

    const comments = await commentModel.find({
        pin: postId
    }).populate("user", "username img name").sort({
        createdAt: -1
    })

    res.status(200).json(comments);
}

const addComment = async (req, res) => {

    const { description, pin } = req.body;


    const userId = req.userId;



    const newComment = await commentModel.create({
        user: userId,
        description,
        pin
    });
    res.status(200).json(newComment);
}

module.exports = { getPostComments, addComment } 