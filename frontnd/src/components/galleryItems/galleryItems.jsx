
import './galleryItems.css'
import { Link } from 'react-router'
import Image from '../image/image'

const GalleryItems = ({ items }) => {

  const optHeight = (474 * items.height) / items.width;
  return (


    <>
      {items && items.map((item) => (

        <div key={item.id} className="gallery-item" style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}>
          {/* <img src={item.media} alt={item.id} /> */}

          <Image src={item.media} alt={item.id} w={474} h={optHeight} />
          <Link href={`/item/${item.id}`} className='overlay' />
          <button className='saveButton'>Save</button>

          <div className='overlayIcons'>
            <button><Image src='./general/share.svg' alt='' /></button>
            <button><Image src='./general/more.svg' alt='' /></button>

          </div>

        </div>
      ))}
    </>
  )
}

export default GalleryItems