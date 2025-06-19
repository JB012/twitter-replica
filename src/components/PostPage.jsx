import PostOptions from "./PostOptions"
import Post from "./Post"
import '../index.css'
import {useParams, useNavigate} from 'react-router-dom'
import {useState} from 'react'

function PostFooterInfo({dateInfo, views, displayMode}) {
    const date = new Date(dateInfo);
    const monthDict = {1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "May", 6: 
        "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Dec"};
    const getMeridiem = (hour) => hour < 12 ? "AM" : "PM";
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const meridiem = getMeridiem(hour);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();

    return (
        <div className="text-gray-700">
            {hour}:{minutes} {meridiem} &middot; {monthDict[month]} {day}, {year} &middot; <strong className={displayMode === "Light" ? "text-black" : "text-white"}>{getViews(views)}</strong> Views
        </div>
    );
}


function getViews(views) {
    function getLetter(views) {
    if (views < 1000) {
        return "None";
    }
    else if (views < 1000000) {
        return "K";
    }
    else if (views < 1000000000) {
        return "M";
    }
    else {
        return "B";
    }
    }

    const letter = getLetter(views);
    const viewString = views.toString();
    if (letter === "K") {
        const lastThreeNums = Number(viewString.substring(viewString.length - 3));
        if (isNaN(lastThreeNums) === false) {
            if (lastThreeNums < 100) {
                return `${viewString.slice(0,-3)}K`;
            }
            else {
                return `${viewString.slice(0,-3)}.${viewString[viewString.length - 3]}K`;
            }
        }
        else {
            return "0";
        }
    }
    else if (letter === "M" || letter === "B") {
        return `${viewString[0]}.${viewString[1]}${letter}`;
    }
    else {
        return viewString;
    }
    
}

function addComment(parentPost, posts, setPosts, content, generateRandomNum, addPost) {
    const postID = generateRandomNum();
    setPosts(posts.map((post) => {
        if (post.userID === parentPost.userID) {
            post.metrics.comments += 1;
            post.comments.push(postID);
        }
        return post;
    }));
    addPost(posts, setPosts, content, postID);
}

function PostPage({displayMode, posts, setPosts, users, handlePostAction, generateRandomNum, addPost}) {
    const [input, setInput] = useState("");
    const {userID, postID} = useParams();
    const navigate = useNavigate();
    const postInfo = posts.find((post) => post.userID === userID && post.postID === postID);
    const userInfo = users.find((user) => user.userID === userID);
    
    return(
    <div className='light-mode-middle-container'>
        <div className="flex px-2 w-full">
            <div className={`flex gap-[20px] w-full ${displayMode === "Light" ? "text-black" : "text-white"}`}>
                <div className="text-2xl cursor-pointer" onClick={() => navigate(-1)}> &larr;</div>
                <div className="text-xl font-bold"> Post</div>
            </div>
        </div>
        <div className="flex flex-col">
            <div className="flex flex-col px-2.5 gap-y-4">
                <div className='flex gap-[10px] w-full'>
                    <div className='flex flex-col pt-[20px] w-full'>
                        <div className='flex gap-[10px] w-full'>
                            <div className={`profile-img self-center ${displayMode === "Light" ? "border-black text-black bg-black" : "border-white text-white bg-white"}`}>
                                B
                            </div>
                            <div className='user-display-container w-full'>
                                <div className='flex flex-col'>
                                <div className={`font-bold ${displayMode === "Light" ? "text-black" : "text-white"}`}>{userInfo.name}</div>
                                <div className="text-gray-500">@{userInfo.userID}</div>
                                </div>
                                
                                <div className='more-options text-gray-500'>
                                &#8230;
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`post-content ${displayMode === "Light" ? "text-black" : "text-white"}`}>
                    {postInfo.postText}
                </div>
                <PostFooterInfo  displayMode={displayMode} dateInfo={postInfo.datePosted} views={postInfo.metrics.views}/>
                <PostOptions expanded={true} postID={postID} handlePostAction={handlePostAction} {...postInfo.metrics}/>
            </div>
            <div className="px-2.5">
                <div className="flex py-2 post gap-[10px]">
                    <div className={`profile-img  ${displayMode === "Light" ? "border-black text-black bg-black" : "border-white text-white bg-white"}`}>
                        A
                    </div>
                    <form className="flex flex-col w-full" action={() => {addComment(postInfo, posts, setPosts, input, generateRandomNum, addPost); setInput("")}}>
                        <input value={input} onChange={(e) => setInput(e.target.value)} className={`w-full outline-none ${displayMode === "Light" ? "text-black placeholder-black" : "text-white placeholder-white"}`} placeholder="Post a reply"></input>
                        <button className="light-mode-btn ml-auto">Reply</button>
                    </form>
                </div>
            </div>
        </div>
        <div className="flex flex-col">
            {postInfo.comments.map((postID) => {
                const findPost = posts.find((post) => post.postID === postID);
                return <Post displayMode={displayMode} reposted={false} url={""} {...findPost} key={findPost.postID}/>  
            })}
        </div>
    </div>
    );
}

export default PostPage