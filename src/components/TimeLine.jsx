import Post from './Post'
import '../index.css'
import {useState} from 'react'
import { useLocalStorage } from "@uidotdev/usehooks";


function TimeLine({displayMode, posts, handleDelete, handlePostAction, handleViews, addPost, generateRandomNum}) {
  const [allPosts, setPosts] = useLocalStorage("posts", posts);
  const [input, setInput] = useState("");

  return(
      <div className={`light-mode-middle-container w-full border ${displayMode === "Light" ? "border-gray-300 border-x-gray-300" : "border-gray-700 border-x-gray-700"}`}>
        <div className={`flex border ${displayMode === "Light" ? "border-gray-300 text-black" : "border-gray-700 text-white"} justify-around px-0 py-2.5`}>
          <div>For You</div>
          <div>Following</div>
        </div>
        <div className='flex flex-col justify-center p-[10px]'>
          <div className='flex'>
            <div className={`profile-img  ${displayMode === "Light" ? "border-black text-black bg-black" : "border-white text-white bg-white"}`}>
              A
            </div>
            <form className='w-full flex flex-col' action={() => {if(input !== "") addPost(allPosts, setPosts, input, generateRandomNum()); setInput("")}}>

              <input value={input} onChange={(e) => setInput(e.target.value)} className={`min-w-[80%] min-h-[50%] text-xl px-2.5 py-0 border-[none] outline-none ${displayMode === "Light" ? "text-black placeholder-black" : "text-white placeholder-white"}`} max={280} placeholder="Create a post"></input>
                
              <button className='light-mode-btn ml-auto'>Post</button>
            </form>
          </div> 
        </div>
        <div className='flex flex-col'>
          {allPosts.map(post => < Post displayMode={displayMode} handleDis {...post} url={""} reposted={false} handleDelete={handleDelete} handlePostAction={handlePostAction} handleViews={handleViews} key={post.postID} />)}
        </div>
      </div>
  );
}

export default TimeLine;