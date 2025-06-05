import React, { useState } from 'react'

import './profile.css'
import Image from '../image/image'
import apiRequest from '../../utils/apiRequest.js'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'
import Gallery from '../Gallery/gallery.jsx'
import Boards from '../Boards/Boards.jsx'
import FollowButton from './followButton.jsx'

const Profile = () => {
    const [type, setType] = useState("saved");

    const fetchingUser = async ({ username }) => {
        const res = await apiRequest.get(`/users/${username}`);

        return res.data;
    }



    const { username } = useParams();

    const { data, isPending, error } = useQuery({
        queryKey: ['profile', username],
        queryFn: () => fetchingUser({ username: username }),
    });

    console.log(data);


    if (isPending) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>
    if (!data) return <div>No data</div>




    return (
        <div className='profile'>

            <Image className="profileImage" src={data.img || '/general/noAvatar.png'} alt='' w={100} h={100} />

            <h3 className='profileName'>{data.name}</h3>

            <div className="profileUsername">
                <Image src='/general/pinlogo.png' /> <span>{data.username}</span>
            </div>

            <span className='profileBio' > بایۆیەکی سادە :3</span>


            <div className='profileFollowCounts'>
                followers   {data.followersCount}  ·   {data.followingCount} following

            </div>
            <div className="profileInteractions">
                <Image className="shareImage" src='/general/share.svg' />
                <div className='profileButtons'>
                    <button>نامە بنێرە</button>
                    <FollowButton isFollowing={data.isFollowing} username={data.username} />
                </div>
                < Image className="moreImage" src='/general/more.svg' />
            </div>




            <div className="profileOptions">

                <span onClick={() => setType("created")} className={type === "created" ? 'active' : ''}> Created </span>
                <span onClick={() => setType("saved")} className={type === "saved" ? 'active' : ''}> Saved </span>

            </div>
            {type === "created" ? <Gallery userId={data._id} /> : <Boards userId={data._id} />}
        </div >



    )
}

export default Profile