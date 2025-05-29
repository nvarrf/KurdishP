import React, { useState } from 'react'

import './comments.css'
import Image from '../../components/image/image.jsx'
import EmojiPicker from 'emoji-picker-react'
const Comments = () => {


  const [inputExists, setinputExists] = useState(false)
  const [clicked, setButtonClicked] = useState(false)
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.trim().length > 0) {
      setinputExists(true)
    } else {
      setinputExists(false)
    }

    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
  }

  const pickEmoji = () => {
    setShowEmojiPicker(!showEmojiPicker);
  }

  const onEmojiClick = emojiObject => {
    setInputValue(prevValue => prevValue + emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  return (
    <div className='comments'>

      <div className='comment'>
        <h3> کۆمێنتەکان</h3>
        <button onClick={() => setButtonClicked(!clicked)}>    <Image src="/general/arrow.svg" alt="" /></button>

      </div>



      <div className={`commentInfo ${clicked ? 'show' : ''}`}>

        <div className="commentList">

          <div className='commenter'>
            <Image src="/general/noAvatar.png" alt="" />
            <span> <h3>نڤار هـ</h3></span>
          </div>
          <div className='commentBody'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id nunc et felis bibendum
              sagittis.
            </p>
            <span className='commentTime'>1h</span>
          </div>


          <div className='commenter'>
            <Image src="/general/noAvatar.png" alt="" />
            <span> <h3>نڤار هـ</h3></span>
          </div>
          <div className='commentBody'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id nunc et felis bibendum
              sagittis.
            </p>
            <span className='commentTime'>1h</span>
          </div>

          <div className='commenter'>
            <Image src="/general/noAvatar.png" alt="" />
            <span> <h3>نڤار هـ</h3></span>
          </div>
          <div className='commentBody'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id nunc et felis bibendum
              sagittis.
            </p>
            <span className='commentTime'>1h</span>


          </div>

          <div className='commenter'>
            <Image src="/general/noAvatar.png" alt="" />
            <span> <h3>نڤار هـ</h3></span>
          </div>
          <div className='commentBody'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id nunc et felis bibendum
              sagittis.
            </p>
            <span className='commentTime'>1h</span>


          </div>
          <div className='commenter'>
            <Image src="/general/noAvatar.png" alt="" />
            <span> <h3>Nvar H</h3></span>
          </div>
          <div className='commentBody'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id nunc et felis bibendum
              sagittis.
            </p>
            <span className='commentTime'>1h</span>


          </div>
        </div>
      </div>

      <div className="postComment">

        <textarea value={inputValue}
          type="text"
          placeholder='...کۆمێنتێك بنووسە '
          onChange={handleInputChange}
          rows={3}
          style={{
            resize: 'none',
            overflow: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitScrollbar: { display: 'none' }

          }} />
        <div className="commentIcons">
          <button
            onClick={pickEmoji}>
            <Image
              src='/general/smile.png'
              alt="Emoji" />
          </button>

          <div className={`postC${inputExists ? 'show' : ''}`} >
            <button><Image src="/general/send.svg"></Image></button>
          </div>

          {showEmojiPicker && (
            <div className="emojiPickerContainer">
              <EmojiPicker onEmojiClick={onEmojiClick} />
            </div>)}

        </div>
      </div>

    </div>
  )
}

export default Comments