import { useState } from 'react'
import Image from '../../components/image/image.jsx'
import EmojiPicker from 'emoji-picker-react'
import apiRequest from '../../utils/apiRequest'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Comment from './comment.jsx'

const addComment = async (comment) => {
    const response = await apiRequest.post('/comments', comment)
    return response.data

}


const CommentForm = ({ id }) => {


    const [inputExists, setinputExists] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [showEmojiPicker, setShowEmojiPicker] = useState(false)





    const onEmojiClick = emojiObject => {
        setInputValue(prevValue => prevValue + emojiObject.emoji);
        setShowEmojiPicker(false);
    };


    const pickEmoji = (e) => {
        e.preventDefault();
        setShowEmojiPicker(!showEmojiPicker);
    }

    const handleInputChange = (e) => {
        e.preventDefault();
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




    const queryClient = useQueryClient();
    const mutation = useMutation({

        mutationFn: addComment,
        onSuccess: () => {

            queryClient.invalidateQueries({ queryKey: ['comments', id] })
            setInputValue('');
            setShowEmojiPicker(false);
        }
    })


    const handleSubmit = async (e) => {
        e.preventDefault();

        mutation.mutate({
            description: inputValue,
            pin: id
        });
    }

    return (
        <form className="postComment" onSubmit={handleSubmit}>

            <textarea
                value={inputValue}
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
                    <button type='submit'><Image src="/general/send.svg"></Image></button>
                </div>


                {showEmojiPicker && (
                    <div className="emojiPickerContainer">
                        <EmojiPicker onEmojiClick={onEmojiClick} />
                    </div>)}

            </div>
        </form>
    )
}

export default CommentForm