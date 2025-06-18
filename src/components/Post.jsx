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
    <div className='post-time-posted'>
        &middot;  {monthDict[month]} {day}
    </div>);
}
/*
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <!--<path d="M 50 50 L 100 100 L 100 200 L 50 200 L 50 150 C 50 140 25 130 20 150 L 20 200 L 0 200" stroke="black" fill="transparent"/>-->
  <path d="M 100 100 L 150 150 L 150 200 L 125 200 L 125 175 C 125 150 75 150 75 175 L 75 200 L 50 200 L 50 150 Z" />
</svg>
*/
function Post({postText, userName, userID, postID, datePosted, metrics, url, reposted, handlePostAction, handleViews, handleDelete}) {
    const [clickMoreOptions, setClickMoreOptions] = useState(false);
    
    return (
        <div className='post cursor-pointer'>
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
                                <div className='profile-post-name'>
                                {userName}
                                </div>
                                <div className='profile-post-id' >
                                @{userID}
                                </div>
                                <PostTime dateInfo={datePosted}/>
                                <div className='ml-auto' onClick={() => setClickMoreOptions(!clickMoreOptions)}>
                                &#8230;
                                </div>
                                <div onClick={() => handleDelete(postID)} style={{"display": clickMoreOptions === false ? "none" : "block"}} className='border rounded-full border-none shadow-xl/30 top-2.5 absolute right-3 bg-white'>
                                    Delete
                                </div>
                            </div>
                            <Link className='post-content w-full' to={url === "" ?`http://${hostname}:5173/${userID}/status/${postID}` : url}>
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