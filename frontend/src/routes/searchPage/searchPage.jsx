import React from 'react'

import './searchPage.css'
import Gallery from '../../components/gallery/gallery'
import { useSearchParams } from 'react-router'


const searchPage = () => {


  let [searchParam] = useSearchParams();
  const search = searchParam.get('search');
  const boardId = searchParam.get('boardId');


  return (
    <div className='searchPage'>
      <Gallery search={search}
        boardId={boardId} />
    </div>
  )
}

export default searchPage