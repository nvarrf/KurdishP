import './topBar.css'
import UserButton from '../userButton/userButton.jsx';
import Image from '../image/image.jsx';
const topBar = (props) => {
    return (
        <div className="-topBar">
            {/* SEARCH */}
            <div className="-search">
                <Image src='/general/search.svg' alt='' w={45} h={45} />
                <input type="text" placeholder="گەڕان" />
                <i className="fas fa-search"></i>
            </div>
            {/* USER */}
            <UserButton />

        </div>
    );
}

export default topBar;