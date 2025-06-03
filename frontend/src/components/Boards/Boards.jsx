import React from 'react'

import './Boards.css'
import Image from '../image/image'
import apiRequest from '../../utils/apiRequest'
import { useQuery } from '@tanstack/react-query'
import { format } from 'timeago.js'

const fetchBoards = async ({ userId }) => {
    const res = await apiRequest.get(`/boards/${userId}`);

    return res.data;
}
const Boards = ({ userId }) => {

    const { data, isPending, error } = useQuery({
        queryKey: ["boards", userId],
        queryFn: () => fetchBoards({ userId }),


    })


    console.log(data)
    if (isPending) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>
    if (!data) return <div>No data</div>




    return (
        <div className='collections'>

            {/* Collection  */}

            {

                data?.map((board) => (

                    <div className='collection' key={board._id}>
                        <Image src={board.firstItem.media} alt={board.title} />
                        <div className='collectionInfo'>
                            <h2>{board.title}</h2>
                            <span>{format(board.createdAt)} <p>Pins{board.pinCount} </p>   </span>
                        </div>
                    </div>
                ))

            }


        </div>
    )
}

export default Boards