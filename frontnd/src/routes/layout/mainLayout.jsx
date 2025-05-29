
import './mainLayout.css'
import RightBar from '../../components/rightBar/rightBar'
import TopBar from '../../components/topBar/topBar'
import { Outlet } from 'react-router'
const mainLayout = () => {
  return (
    <div className='mainLayout'>
      <div className='app'>
        <RightBar />
        <div className='content'>
          <TopBar />
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default mainLayout