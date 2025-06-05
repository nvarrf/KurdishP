import './gallery.css'

import GalleryItems from '../galleryItems/galleryItems'
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import apiRequest from '../../utils/apiRequest'

import {
  useInfiniteQuery,
} from
  '@tanstack/react-query';



const fetchPins = async ({ pageParam, search, userId, boardId }) => {
  const res = await apiRequest.get(`/pins?cursor=${pageParam}&search=${search || ""}&userId=${userId || ""}&boardId=${boardId || ""}`);

  return res.data;
}



const Gallery = ({ search, userId, boardId }) => {

  const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
    queryKey: ["pins", search, userId, boardId],
    queryFn: ({ pageParam = 0 }) => fetchPins({ pageParam, search, userId, boardId }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,

  });

  if (status === "error") return "Something went wrong while fetching the data....!";
  if (status === "pending") return "Loading...";
  if (!data) return "No data";

  // console.log(data)


  const allPins = data?.pages?.map((page) => page.pins).flat() || [];

  // console.log(allPins)

  return (

    <InfiniteScroll dataLength={allPins.length} next={fetchNextPage} hasMore={!!hasNextPage} loader={<h4 style={{ textAlign: 'center' }}>Loading More Pics</h4>
    }
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <div className='gallery'>

        {
          allPins?.map((item) => (
            <GalleryItems key={item._id} item={item} />

          ))

        }

      </div >
    </InfiniteScroll>
  )
}

export default Gallery