import { useState } from 'react';
import './userButton.css';
import Image from '../image/image';

import apiRequest from '../../utils/apiRequest';
import { Link, useNavigate } from 'react-router';
import useAuthStore from '../../utils/authStore';



const UserButton = () => {



    const { currentUser, removeCurrentUser } = useAuthStore();
    console.log(currentUser);

    const [open, setOpen] = useState(false);
    const navigate = useNavigate();



    const toggleDropdown = () => {
        if (open)
            setOpen(false);
        else
            setOpen(true);

    }



    const handleLogOut = async () => {

        try {
            await apiRequest.post('/users/auth/logout', {});

            removeCurrentUser();
            navigate('/auth');

        } catch (err) {
            console.log('Error:', err) // Debug log
        }


    }

    return currentUser ? (
        <div className="userButton">
            <Image src='/general/arrow.svg' alt="arrow" className='arrow' onClick={toggleDropdown} />
            <Image src={currentUser.img || '/general/noAvatar.png'} alt="user" />


            {open && <div className='dropdownContent'>

                <Link to={`/profile/${currentUser.username}`} className="content" >پڕۆفایل</Link>
                <Link className="content">ڕێکخستنەکان</Link>
                <div onClick={handleLogOut} className="content" >چوونەدەرەوە</div>

            </div>}
        </div>
    ) : (<a href="/auth" className='loginLink'>هەژمار درووستبکە/چوونەژوورەوە </a>);
}

export default UserButton;