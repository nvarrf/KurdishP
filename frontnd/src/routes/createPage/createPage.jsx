import React from 'react'

import './createPage.css'
import Image from '../../components/image/image'

const createPage = () => {
  return (
    <div className='createPage'>

      <div className="createTop">
        <h2>درووستکردنی پۆست</h2>
        <button className="createButton">بڵاوکردنەوە</button>
      </div>
      <div className="createBottom">


        <div className="upload">
          <div className="uploadTitle">

            <Image src="/general/upload.svg" alt="upload" w={375} h={375} />
            <span> فایلێک هەڵبژێرە
            </span>

          </div>


          <div className="uploadInfo">

            پێشنیاری ئەوە دەکەین کە ڕەسمێک بەکاربهێت کە کواڵەتییەکەی
            بەرزی هەبێت هەوڵبدە فایلی جۆری .jpg بەکاربهێنیت.
            کە قەبارەکەی لە نێوان ٢٠ مب بۆ ٢٠٠ مب بێت.

          </div>
          <div className='saveFromUrl'><button>ناونیشانی وێنە بە لینک
          </button></div>
        </div>
        <form className="createForm">
          <div className="createFormItem">
            <label htmlFor="title">سەرنووس</label>
            <input type="text" placeholder='سەرنووسێک بنووسە...' id='title' name='title' />

          </div>
          <div className="createFormItem">
            <label htmlFor="desc">زانیاری</label>
            <textarea
              rows={6}
              type="text"
              placeholder='زانیاری زیاتر لەسەر بابەتەکە...'
              id='desc'
              name='desc' />

          </div>
          <div className="createFormItem">
            <label htmlFor="Link">لینک</label>
            <input type="text" placeholder='لینکێک دابنێ' id='Link' name='Link' />
          </div>

          <div className="createFormItem">
            <label htmlFor="board">بۆرد</label>
            <select name='board' id='board' >
              <option value="1">بۆردێک هەڵبژێرە</option>
              <option value="2"> 1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div className="createFormItem">
            <label htmlFor="Tags">تاگ</label>
            <input type="text" placeholder='تاگێک زیاد بکە' id='Tags' name='Tags' />
          </div>

          <small>بێخەمبە کەس تاگەکانت نابینێت</small>
        </form>



      </div>


    </div>
  )
}

export default createPage