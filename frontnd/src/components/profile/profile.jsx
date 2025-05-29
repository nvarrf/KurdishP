import React, { useState } from 'react'

import './profile.css'
import Image from '../image/image'

import Gallery from '../gallery/gallery'
import Collections from '../collections/collections'
const Profile = () => {

    const [type, setType] = useState("saved");

    return (
        <div className='profile'>

            <Image className="profileImage" src='/general/noAvatar.png' alt='' w={100} h={100} />

            <h3 className='profileName'>Nvar</h3>

            <div className="profileUsername">
                <Image src='/general/pinlogo.png' /> <span>9vyxd</span>
            </div>

            <span className='profileBio' > بایۆیەکی سادە :3</span>


            <div className='profileFollowCounts'>
                <h4>4 Followers</h4>
                <h4>5 Following</h4>

            </div>
            <div className="profileInteractions">
                <Image className="shareImage" src='/general/share.svg' />
                <div className='profileButtons'>
                    <button>نامە بنێرە</button>
                    <button>فۆڵۆو </button>
                </div>
                < Image className="moreImage" src='/general/more.svg' />
            </div>




            <div className="profileOptions">

                <span onClick={() => setType("created")} className={type === "created" ? 'active' : ''}> Created </span>
                <span onClick={() => setType("saved")} className={type === "saved" ? 'active' : ''}> Saved </span>

            </div>
            {type === "created" ? <Gallery /> : <Collections />}
        </div >



    )
}

export default Profile