import React from 'react'

import './postInteractions.css'
import Image from '../../components/image/image.jsx'
const postInteractions = () => {
  return (
    <div className='postInteractions'>
      <div className="postIcons">
        <Image src="/general/react.svg" alt="" />
        69
        <Image src="/general/share.svg" alt="" />
        <Image src="/general/more.svg" alt="" />


      </div>
      <button>Save</button>

    </div>
  )
}

export default postInteractions