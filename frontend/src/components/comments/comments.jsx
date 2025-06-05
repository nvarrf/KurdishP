import React, { useState } from 'react'

import './comments.css'
import apiRequest from '../../utils/apiRequest'
import { useQuery } from '@tanstack/react-query'
import Comment from './comment.jsx'
import CommentForm from './commentForm.jsx'
import useAuthStore from '../../utils/authStore'


const fetchComments = async ({ postId }) => {
  const res = await apiRequest.get(`/comments/${postId}`);

  return res.data;
}

const Comments = ({ postId }) => {

  const { currentUser } = useAuthStore();




  const { data, isPending, error } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments({ postId }),


  })


  if (isPending) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>
  if (!data) return <div>No data</div>



  return (
    <div className='comments'>

      <div className='commentList' style={{ marginBottom: 40 }}>
        <span className='commentCount'>  {data.length === 0 ? 'هیج کۆمێنتێک نەنوسراوە' : '  کۆمێنتەکان  ' + data.length}</span>


        {data.map((comment) => (
          <Comment key={comment._id} comment={comment} currentUserId={currentUser?._id} />
        ))}

      </div>


      <CommentForm id={postId} />

    </div>
  )
}


export default Comments