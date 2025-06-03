
import './galleryItems.css'
import { Link } from 'react-router'
import Image from '../image/image'

const GalleryItems = ({ item }) => {

  console.log(item.media)
  const optHeight = (474 * item.height) / item.width;
  return (


    <div key={item._id} className="gallery-item" style={{ gridRowEnd: `span ${Math.ceil(item.height / 45)}` }}>
      {/* <img src={item.media} alt={item.id} /> */}

      <Image src={item.media} alt={item._id} w={372} h={optHeight} />
      <Link to={`/pin/${item._id}`} className='overlay' />
      <button className='saveButton'>Save</button>

      <div className='overlayIcons'>
        <button><Image src='./general/share.svg' alt='' /></button>
        <button><Image src='./general/more.svg' alt='' /></button>

      </div>

    </div>


  )
}

export default GalleryItems