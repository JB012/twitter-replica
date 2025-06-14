import Post from './Post'
import '../index.css'
import {useState} from 'react'
import { useLocalStorage } from "@uidotdev/usehooks";

function addPost(allPosts, setPosts, contentInfo) {
  const newPost =  {
        userName: "User",
        userID: "user",
        postID: generateRandomNum().toString(),
        postText: contentInfo,
        postMedia: {"image": "", "video": ""},
        datePosted: "2025-05-22T11:09:00",
        metrics: {"likes": 0, "reposts": 0, "bookmarks": 0, "comments": 0, "views": 0},
        comments: []
    }

  setPosts([newPost, ...allPosts]);
}


/* Twitter's post ID is 19 digits long */
function generateRandomNum() {
  return Math.floor(1000000000000000000 + Math.random() * 9000000000000000000);
}
function TimeLine({posts}) {
  const [allPosts, setPosts] = useLocalStorage("posts", posts);
  const [input, setInput] = useState("");

  return(
      <div className='light-mode-middle-container'>
        <div className='flex justify-around px-0 py-2.5'>
          <div>For You</div>
          <div>Following</div>
        </div>
        <div className='flex flex-col justify-center p-[10px]'>
          <div className='flex'>
            <div className='profile-img'>
              A
            </div>
            <input value={input} onChange={(e) => setInput(e.target.value)} className=' min-w-[80%] min-h-[50%] text-xl px-2.5 py-0 border-[none] outline-none' max={280} placeholder="Create a post"></input>
          </div> 
          <button className='light-mode-btn self-end' onClick={() => {if(input !== "") addPost(allPosts, setPosts, input)}}>Post</button>
        </div>
        <div className='flex flex-col'>
          {allPosts.map(post => < Post {...post} key={post.postID} />)}
        </div>
      </div>
  );
}

export default TimeLine;