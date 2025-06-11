import './index.css'
import PageOptions from './components/PageOptions'
import TrendingOptions from './components/TrendingOptions'
import TimeLine from './components/TimeLine'
import PostPage from './components/PostPage'
import ProfilePage from './components/ProfilePage'

function HomePage() {
  return (
    <>
      <div className="flex min-h-full">
        <PageOptions/>
        <div className='flex flex-grow-2'>
          <ProfilePage/>
          <TrendingOptions/>
        </div>
      </div>
    </>
  )
}

export default HomePage
