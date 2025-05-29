import React, { useState } from 'react'

import './authPage.css'
import Image from '../../components/image/image'
const authPage = () => {

  const [isRegister, setIsRegister] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const [error, setError] = useState(false)

  return (
    <div className='authPage'>
      <div className="authContainer">
        <Image src="/general/logo.svg" w={16} h={16} />
        <h1>{!isRegister ? 'چوونەژوورەوە' : 'خۆتۆمارکردن'}</h1>

        {isRegister ? (

          <form key="registerForm">

            <div className="formGroup">
              <label htmlFor="username">Username</label>
              <input type="text" placeholder='Username' id="username" name='username' required />
            </div>

            <div className="formGroup">
              <label htmlFor="displayName">Name</label>
              <input type="text" placeholder='displayName' id="displayName" name='displayName' required />
            </div>


            <div className="formGroup">
              <label htmlFor="email">ئیمێڵ</label>
              <input type="email" placeholder='example@mail.com...' id="email" name='email' required />
            </div>
            <div className="formGroup">
              <label htmlFor="password">پاسوۆرد</label>
              <input type="password" placeholder='پاسوۆردەکەت داغڵ بکە' id="password" name='password' required />
            </div>

            <button type='submit'>تۆمارکردن</button>

            <p >ئەکاونتت هەیە؟ <b onClick={() => setIsRegister(false)}> چوونەژوورەوە</b>  </p>
            {error && <p className='error'>{error}</p>}
          </form>)

          :


          (<form key="loginForm">
            <div className="formGroup">
              <label htmlFor="email">ئیمێڵ</label>
              <input type="email" placeholder='example@mail.com...' id="email" name='email' required />
            </div>
            <div className="formGroup">
              <label htmlFor="password">پاسوۆرد</label>
              <input type="password" placeholder='پاسوۆردەکەت داغڵ بکە' id="password" name='password' required />
            </div>

            <button type='submit'>چوونەژوورەوە</button>

            <p >ئەکاونتت نییە؟ <b onClick={() => setIsRegister(true)}>درووستی بکە</b>  </p>
            {error && <p className='error'>{error}</p>}
          </form>)}

      </div>
    </div>
  )
}

export default authPage