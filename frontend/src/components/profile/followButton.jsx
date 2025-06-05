import { useMutation, useQueryClient } from '@tanstack/react-query'
import apiRequest from '../../utils/apiRequest.js'


const followUser = async (username) => {
    const response = await apiRequest.post(`/users/follow/${username}`)
    return response.data
}



const FollowButton = ({ isFollowing, username }) => {

    const queryClient = useQueryClient();
    const mutation = useMutation({

        mutationFn: followUser,
        onSuccess: () => {

            queryClient.invalidateQueries({ queryKey: ['profile', username] })

        }
    })





    return (
        <button onClick={() => mutation.mutate(username)}
            disabled={mutation.isPending}>
            {isFollowing ? 'ئەن فۆڵۆو' : 'فۆڵۆو'}
        </button>

    )
}

export default FollowButton