
import './postPage.css'
import React, { useState } from 'react'
import Image from '../../components/image/image'
import PostInteractions from '../../components/postInteractions/postInteractions'
import { Link } from 'react-router'
import Comments from '../../components/comments/comments'
import Fullsize from '../../components/fullsize/fullsize'
const postPage = () => {


  const [showFullsize, setShowFullsize] = useState(false)
  const imageSrc = '/pins/pin6.jpeg'

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

          <Image src={imageSrc} alt='' w={736} />

          <div className="imageoverlay">
            <button onClick={onExpand} > <span>ڕەسمەکە بە قەبارەی ڕەسەن ببینە</span><Image src='/general/expand.svg' alt='' w={32} /></button>
            <button> <span>هاوشێوەی ئەم ڕەسمە </span> <Image src='/general/searchMore.svg' alt='' w={32} /></button>
          </div>

        </div>
        <div className="postDetails">
          <PostInteractions />
          <Link to="/nvar" className='postUser'>
            <Image src={'/general/noAvatar.png'} />
            <span> Nvar H</span>
          </Link>
          <Comments />

        </div>
      </div>

      {showFullsize ? <Fullsize imageSrc={imageSrc} onClose={onClose} /> : null}
    </div>
  )
}

export default postPage