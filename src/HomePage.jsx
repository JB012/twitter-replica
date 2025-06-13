import './index.css'
import PageOptions from './components/PageOptions'
import TrendingOptions from './components/TrendingOptions'
import TimeLine from './components/TimeLine'
import PostPage from './components/PostPage'
import ProfilePage from './components/ProfilePage'
import DailiesPage from './components/DailiesPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function HomePage() {
  return (
    <BrowserRouter>
      <div className="flex min-h-full">
        <PageOptions/>
        <div className='flex flex-grow-2'>
          <Routes>
            <Route path="/" element={<TimeLine />} />
          </Routes>
          <TrendingOptions/>
        </div>
      </div>
      </BrowserRouter>
  )
}

export default HomePage
