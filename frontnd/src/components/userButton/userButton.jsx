import { useState } from 'react';
import './userButton.css';
import Image from '../image/image';
export const UserButton = (props) => {
    const currentUser = true;
    const [open, setOpen] = useState(false);
    const toggleDropdown = () => {
        if (open)
            setOpen(false);
        else
            setOpen(true);
        console.log(open);
    }

    return currentUser ? (
        <div className="userButton">
            <Image src='/general/arrow.svg' alt="arrow" className='arrow' onClick={toggleDropdown} />
            <Image src='/general/noAvatar.png' alt="user" />


            {open && <div className='dropdownContent'>
                <a href='/nvar' className='dpHover'>
                    <div className="content">پڕۆفایل</div>
                </a>
                <a href='/' className='dpHover'>   <div className="content">ڕێکخستنەکان</div>    </a>
                <a href='/' className='dpHover'>
                    <div className="content">چوونەدەرەوە</div>     </a>
            </div>}
        </div>
    ) : (<a href="/login" className='loginLink'>هەژمار درووستبکە/چوونەژوورەوە </a>);
}

export default UserButton;