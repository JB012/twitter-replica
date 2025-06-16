import Post from './Post'
import '../index.css'
import {useState} from 'react'
import { useLocalStorage } from "@uidotdev/usehooks";


function TimeLine({posts, handleDelete, handlePostAction, handleViews, addPost, generateRandomNum}) {
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
          <button className='light-mode-btn self-end' onClick={() => {if(input !== "") addPost(allPosts, setPosts, input, generateRandomNum())}}>Post</button>
        </div>
        <div className='flex flex-col'>
          {allPosts.map(post => < Post {...post} handleDelete={handleDelete} handlePostAction={handlePostAction} handleViews={handleViews} key={post.postID} />)}
        </div>
      </div>
  );
}

export default TimeLine;