
import './postPage.css'
import React, { useState } from 'react'
import Image from '../../components/image/image'
import PostInteractions from '../../components/postInteractions/postInteractions'
import { Link, useParams } from 'react-router'
import Comments from '../../components/comments/comments'
import Fullsize from '../../components/fullsize/fullsize'

import { useQuery } from '@tanstack/react-query'

import apiRequest from '../../utils/apiRequest'

const postPage = () => {
  const [showFullsize, setShowFullsize] = useState(false)

  const fetchingPin = async ({ pin }) => {
    const res = await apiRequest.get(`/pins/${pin}`);

    return res.data;
  }


  const { id } = useParams();
  const { isPending, error, data } = useQuery({
    queryKey: ['pin', id],
    queryFn: () => fetchingPin({ pin: id }),
  });

  if (isPending) return " Loading Pin ..."

  if (!data) return `No Data to be shown for ${id}`
  if (error) return `Error: ${error.message}`;

  // if (isSuccess) return console.log(data)







  const imageSrc = data.media || '/pins/pin1.jpeg';

  const onExpand = () => {
    setShowFullsize(true)

  }
  const onClose = () => {
    setShowFullsize(false)
  }

  return (
    <div className='postPage'>
      <div className="postContainer">

        <div className="postImg">
          <Image src={imageSrc} alt='' w={data.width} h={data.height} />
          <div className="imageoverlay">
            <button onClick={onExpand} > <span>ڕەسمەکە بە قەبارەی ڕەسەن ببینە</span><Image src='/general/expand.svg' alt='' w={32} /></button>
            <button> <span>هاوشێوەی ئەم ڕەسمە </span> <Image src='/general/searchMore.svg' alt='' w={32} /></button>
          </div>

        </div>
        <div className="postDetails">
          <PostInteractions />
          <Link to={`/${data.user.username}`} className='postUser'>
            <Image src={data.user.img || '/general/noAvatar.png'} />
            <span> ${data.user.name}</span>
          </Link>
          <Comments />

        </div>
      </div>

      {showFullsize ? <Fullsize imageSrc={imageSrc} onClose={onClose} /> : null}
    </div>
  )
}

export default postPage