import React from 'react'

import './fullsize.css'
import Image from '../../components/image/image'

const Fullsize = ({ imageSrc, onClose }) => {
    return (
        <div className={`fullsize`}>
            <div className='leftCloseButton' onClick={onClose}>
                <Image src='/general/close-x.svg' w={1200} />
            </div>

            <div className='fullImage'>

                <Image src={imageSrc} alt='' />

            </div>


            <button className='saveBTN'>Save</button>


            <div className="Mag">
                <button>+</button>
                <button>-</button>
            </div>



        </div>

    )
}

export default Fullsize