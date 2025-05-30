import './gallery.css'

import GalleryItems from '../galleryItems/galleryItems'
import axios from 'axios';
import {
  useQuery,
} from
  '@tanstack/react-query';



const fetchPins = async () => {
  const respone = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/pins`);


  return respone.data;


}



const Gallery = () => {

  const { isPending, error, data } = useQuery({
    queryKey: ["pins"],
    queryFn: fetchPins,
  });

  if (error) return "Something went wrong " + error.message;
  if (isPending) return "Loading...";

  // console.log(data)
  return (
    <div className='gallery'>

      {
        data?.map((item) => (
          <GalleryItems item={item} key={item._id} />

        ))

      }
    </div>
  )
}

export default Gallery