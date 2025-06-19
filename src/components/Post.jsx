import '../index.css'
import PostOptions from './PostOptions'
import {Link} from 'react-router'
import {useState} from 'react'

const hostname = window.location.hostname;

function PostTime({dateInfo}) {
    const date = new Date(dateInfo);
    const monthDict = {1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "May", 6: 
        "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Dec"};
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return(
    <div className="post-time-posted text-gray-500">
        &middot;  {monthDict[month]} {day}
    </div>);
}

function Post({displayMode, postText, userName, userID, postID, datePosted, metrics, url, reposted, handlePostAction, handleViews, handleDelete}) {
    const [clickMoreOptions, setClickMoreOptions] = useState(false);
    
    return (
        <div className={`post cursor-pointer border ${displayMode === "Light" ? "border-gray-300" : "border-gray-700"}`}>
            <div className='flex w-full px-2.5 gap-[10px]'>
                <div className='flex flex-col w-full'>
                    <div className={reposted === false ? "hidden" : "flex w-full px-15 text-gray-600"}>
                    You reposted                                                                
                    </div>
                    <div className='flex w-full px-2.5 gap-[10px]'>
                        <div className='profile-img'>
                                        B
                                        </div>
                        <div className='flex flex-col w-full'>
                            <div className='flex justify-between gap-[4px] relative'>
                                <div className='flex gap-2'>
                                    <div className={`profile-post-name ${displayMode === "Light" ? "text-black" : "text-white"}`}>
                                    {userName}
                                    </div>
                                    <div className="profile-post-id text-gray-500" >
                                    @{userID}
                                    </div>
                                    <PostTime displayMode={displayMode} dateInfo={datePosted}/>
                                </div>
                                <div className='ml-autotext-gray-700' onClick={() => setClickMoreOptions(!clickMoreOptions)}>
                                &#8230;
                                </div>
                                <div onClick={() => handleDelete(postID)} style={{"display": clickMoreOptions === false ? "none" : "block"}} className='border rounded-full border-none shadow-xl/30 top-2.5 absolute right-3 bg-white'>
                                    Delete
                                </div>
                            </div>
                            <Link className={`post-content w-full ${displayMode === "Light" ? "text-black" : "text-white"}`} to={url === "" ?`http://${hostname}:5173/${userID}/status/${postID}` : url}>
                                {postText}
                            </Link>
                        </div>
                    </div>
                    < PostOptions expanded={false} postID={postID} handleDelete={handleDelete} handlePostAction={handlePostAction} handleViews={handleViews} {...metrics} />
                </div>
            </div>
        </div>
    );
}

export default Post;