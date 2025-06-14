import './index.css'
import PageOptions from './components/PageOptions'
import TrendingOptions from './components/TrendingOptions'
import TimeLine from './components/TimeLine'
import PostPage from './components/PostPage'
import ProfilePage from './components/ProfilePage'
import DailiesPage from './components/DailiesPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  

  useEffect(() => {
    async function fetchAPI() {
      const postsResponse = await axios.get("http://localhost:8080/postsData");
      const usersResponse = await axios.get("http://localhost:8080/usersData");
      
      setPosts(postsResponse.data);
      setUsers(usersResponse.data);
    }
    fetchAPI();
  }, []);

  return posts.length === 0 ? null : (
      <div className="flex min-h-full">
        <PageOptions/>
        <div className='flex flex-grow-2'>
          <Routes>
            <Route path="/" element={<TimeLine posts={posts}/>} />
            <Route path="/dailies" element={<DailiesPage />} />
            <Route path="/profile" element={<ProfilePage posts={posts} users={users}/>} />
            <Route path="/:userID/status/:postID" element={<PostPage users={users}/>} />
          </Routes>
          <TrendingOptions/>
        </div>
      </div>
  )
}

export default App
