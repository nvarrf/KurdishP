import './topBar.css'
import UserButton from '../userButton/userButton.jsx';
import Image from '../image/image.jsx';


import { useNavigate } from "react-router";
const topBar = (props) => {

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        navigate(`/search?search=${e.target[0].value}`);
    }
    return (
        <div className="-topBar">
            {/* SEARCH */}
            <form onSubmit={handleSubmit} className="-search">
                <Image src='/general/search.svg' alt='' w={45} h={45} />
                <input type="text" placeholder="گەڕان" />
                <i className="fas fa-search"></i>
            </form>
            {/* USER */}
            <UserButton />

        </div>
    );
}

export default topBar;