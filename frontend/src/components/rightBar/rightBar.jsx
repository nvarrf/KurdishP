import './rightBar.css'
import Image from '../image/image';
import { Link } from 'react-router';

const leftBar = (props) => {
   return (
      <div className="leftBar">
         <div className='menuIcons'>

            <Link to='#'>
               <Image className='logo' src='/general/logo.svg' />
            </Link>
            <Link to='/'>
               <Image className='icon' src='/general/home.svg' />
            </Link>
            <Link to='/create'>
               <Image className='icon' src='/general/create.svg' />
            </Link>
            <Link to='/'>
               <Image className='icon' src='/general/updates.svg' />
            </Link>
            <Link to='/'>
               <Image className='icon' src='/general/messages.svg' />
            </Link>
         </div>

         <Link to='/'>
            <Image className='logo' src='/general/settings.svg' />
         </Link>
      </div>
   );
}
export default leftBar;