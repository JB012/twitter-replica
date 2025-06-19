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
import { useLocalStorage } from "@uidotdev/usehooks";


function App() {
  const [posts, setPosts] = useLocalStorage("posts", localStorage.getItem("posts"));
  const [users, setUsers] = useLocalStorage("users", localStorage.getItem("users"));
  const [displayMode, setDisplayMode] = useState("Light");

  useEffect(() => {
    async function fetchAPI() {
      const postsResponse = await axios.get("http://localhost:8080/postsData");
      const usersResponse = await axios.get("http://localhost:8080/usersData");
      
      if (posts === null && users === null) {
        setPosts(postsResponse.data);
        setUsers(usersResponse.data);
      }
    }
    fetchAPI();
    
    const html = document.querySelector("html");
    html.style.backgroundColor = displayMode === "Light" ? "white" : "black";
  }, [displayMode]);

  function handleDisplayMode() {
    if (displayMode === "Light") {
      setDisplayMode("Dark");
    }
    else {
      setDisplayMode("Light");
    }
  }


  function handlePostAction(postID, action) {
    setPosts(posts.map((post) => {
        if (post.postID === postID) {
          const findUser = users.find((user) => user.userID === "user");
          if (action === "liked") {
            if (findUser.postAction.liked.includes(postID)) {
                post.metrics.likes -= 1;
            }
            else {
                post.metrics.likes += 1;
            }
          }
          else if (action === "reposted") {
            if (findUser.postAction.reposted.includes(postID)) {
                post.metrics.reposts -= 1;
            }
            else {
                post.metrics.reposts += 1;
            }
          }
          if (action === "bookmarked") {
            if (findUser.postAction.bookmarked.includes(postID)) {
                post.metrics.bookmarks -= 1;
            }
            else {
                post.metrics.bookmarks += 1;
            }
          }
            
        }
        return post;
    }));

    setUsers(users.map((user) => {
        if (user.userID === "user") {
          if (action === "liked") {
            if (!user.postAction.liked.includes(postID)) {    
                user.postAction.liked.push(postID);
            }
            else {
                user.postAction.liked = user.postAction.liked.filter((id) => postID !== id);
            }
          }
          if (action === "reposted") {
            if (!user.postAction.reposted.includes(postID)) {    
                user.postAction.reposted.push(postID);
            }
            else {
                user.postAction.reposted = user.postAction.reposted.filter((id) => postID !== id);
            }
          }
          if (action === "bookmarked") {
            if (!user.postAction.bookmarked.includes(postID)) {    
                user.postAction.bookmarked.push(postID);
            }
            else {
                user.postAction.bookmarked = user.postAction.bookmarked.filter((id) => postID !== id);
            }
          }
        }
        return user;
    }));
  }

  function handleViews(postID) {
    setPosts(posts.map((post) => {
      if (post.postID === postID) {
        post.metrics.views += 1;
      }
      return post;
    }));
  }

  
function handleDelete(postID) {
  const findPost = posts.find((post) => post.postID === postID && post.userID === "user");
  setPosts(posts.filter((post) => post !== findPost));
}

/* Twitter's post ID is 19 digits long */
function generateRandomNum() {
  return Math.floor(1000000000000000000 + Math.random() * 9000000000000000000).toString();
}

function addPost(allPosts, setPosts, contentInfo, randomNum) {
  const newPost =  {
        userName: "User",
        userID: "user",
        postID: randomNum,
        postText: contentInfo,
        postMedia: {"image": "", "video": ""},
        datePosted: "2025-05-22T11:09:00",
        metrics: {"likes": 0, "reposts": 0, "bookmarks": 0, "comments": 0, "views": 0},
        comments: []
    }

    setPosts([newPost, ...allPosts]);
  }

  return posts === null && users === null ? null : (
      <div className="flex min-h-full">
        <PageOptions displayMode={displayMode} setDisplayMode={setDisplayMode} handleDisplayMode={handleDisplayMode} />
        <div className='flex flex-grow-2'>
          <Routes>
            <Route path="/" element={<TimeLine displayMode={displayMode} generateRandomNum={generateRandomNum} addPost={addPost} handleDelete={handleDelete} handlePostAction={handlePostAction} handleViews={handleViews} posts={posts} users={users} />} />
            <Route path="/dailies" element={<DailiesPage />} />
            <Route path="/:profile" element={<ProfilePage handleDelete={handleDelete} handlePostAction={handlePostAction} handleViews={handleViews} posts={posts} users={users}/>} />
            <Route path="/:userID/status/:postID" element={<PostPage displayMode={displayMode} posts={posts} users={users} setPosts={setPosts} generateRandomNum={generateRandomNum} addPost={addPost} handleDelete={handleDelete} handlePostAction={handlePostAction} handleViews={handleViews} />} />
          </Routes>
          <TrendingOptions/>
        </div>
      </div>
  )
}

export default App
