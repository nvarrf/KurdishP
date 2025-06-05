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


const deleteComment = async (req, res) => {
    try {
        const { commentId } = req.params;
        const userId = req.userId; // From verifyToken middleware

        const comment = await commentModel.findById(commentId);

        if (!comment) {
            return res.status(404).json({
                message: "Comment not found"
            });
        }

        if (comment.user.toString() !== userId) {
            return res.status(403).json({
                message: "You can only delete your own comments"
            });
        }
        await commentModel.findByIdAndDelete(commentId);

        res.status(200).json({
            message: "Comment deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Error deleting comment",
            error: error.message
        });
    }
};
module.exports = { getPostComments, addComment, deleteComment }