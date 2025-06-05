import { format } from 'timeago.js'
import Image from '../image/image'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import apiRequest from '../../utils/apiRequest'
const deleteComment = async (commentId) => {
    try {
        const res = await apiRequest.delete(`/comments/${commentId}`)

        return res.data
    } catch (err) {
        console.log('Error:', err) // Debug log
        setError(err.response?.data?.error)
    }
}


const Comment = ({ comment, currentUserId }) => {

    const queryClient = useQueryClient();

    const deleteCommentMutation = useMutation({

        mutationFn: deleteComment,

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["comments"] })
        },
        onError: (err) => {
            console.log(err.message)
        }
    })

    const handleDelete = () => {

        if (window.confirm('Are you sure you want to delete this comment?')) {

            deleteCommentMutation.mutate(comment._id)
        }
    };


    return (
        <div className="comment">
            <Image src={comment.user.img || `/general/noAvatar.png`} alt="" />

            <div className='commentContent'>
                <span className='commentUsername'> {comment.user.name}</span>
                <p className='commentText'>
                    {comment.description}
                </p>
                <span className='commentTime'>{format(comment.createdAt)}</span>
            </div>
            {currentUserId === comment.user._id && (
                <button
                    onClick={handleDelete}
                    disabled={deleteCommentMutation.isLoading}
                    className="delete-btn"
                >
                    {deleteCommentMutation.isLoading ? 'Deleting...' : 'Delete'}
                </button>
            )}
        </div>
    )
}

export default Comment