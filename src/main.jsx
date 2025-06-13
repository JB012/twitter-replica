import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PageOptions from './components/PageOptions'
import TrendingOptions from './components/TrendingOptions'
import TimeLine from './components/TimeLine'
import PostPage from './components/PostPage'
import ProfilePage from './components/ProfilePage'
import DailiesPage from './components/DailiesPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div className="flex min-h-full">
        <PageOptions/>
        <div className='flex flex-grow-2'>
          <Routes>
            <Route path="/" element={<TimeLine/>} />
            <Route path="/dailies" element={<DailiesPage/>} />
            <Route path="/profile" element={<ProfilePage/>} />
            <Route path="/:user/status/:postID" element={<PostPage/>} />
          </Routes>
          <TrendingOptions/>
        </div>
      </div>
      </BrowserRouter>
  </StrictMode>,
)
