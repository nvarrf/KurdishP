import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from './routes/homepage/homepage'
import AuthPage from './routes/authPage/authPage'
import CreatePage from './routes/createPage/createPage'
import PostPage from './routes/postPage/postPage'
import ProfilePage from './routes/profilePage/profilePage'
import SearchPage from './routes/searchPage/searchPage'
import MainLayout from './routes/layout/mainLayout';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/pins/:id" element={<PostPage />} />


          <Route path="/:username" element={<ProfilePage />} />
          <Route path="/search" element={<SearchPage />} />

        </Route>
        <Route path="/auth" element={<AuthPage />} />



      </Routes>

    </BrowserRouter>
  </StrictMode>,
)
