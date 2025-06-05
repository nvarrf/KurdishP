import React, { useState } from 'react'
import { useNavigate } from 'react-router'

import './authPage.css'
import Image from '../../components/image/image'
import apiRequest from '../../utils/apiRequest'
import useAuthStore from '../../utils/authStore'

const authPage = () => {

  const [isRegister, setIsRegister] = useState(false)
  const [error, setError] = useState('')

  const navigate = useNavigate();
  const { setCurrentUser } = useAuthStore();


  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('') // Clear previous errors

    const formData = new FormData(e.target)

    const data = {
      username: formData.get('username'),
      displayName: formData.get('displayName'),
      email: formData.get('email'),
      password: formData.get('password')
    }

    try {
      const res = await apiRequest.post(`/users/auth/${isRegister ? 'register' : 'login'}`, data)


      setCurrentUser(res.data)

      navigate('/')

    } catch (err) {
      console.log('Error:', err) // Debug log
      setError(err.response?.data?.error)
    }
  }

  return (
    <div className='authPage'>
      <div className="authContainer">
        <Image src="/general/logo.svg" w={16} h={16} />
        <h1>{!isRegister ? 'چوونەژوورەوە' : 'خۆتۆمارکردن'}</h1>

        {isRegister ? (

          <form key="registerForm" method='POST' onSubmit={handleSubmit}>

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
            {error ? <div className='handleError'> <span>{error}</span>  </div> : ''}


          </form>

        )

          :


          (<form key="loginForm" method='POST' onSubmit={handleSubmit}>
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

            {error ? <div className='handleError'> <span>{error} </span>  </div> : ''}
          </form>)}


      </div>
    </div>
  )
}

export default authPage