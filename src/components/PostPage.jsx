import PostOptions from "./PostOptions"
import Post from "./Post"
import '../index.css'
import {useParams, useNavigate} from 'react-router-dom'

function PostFooterInfo({dateInfo, views}) {
    const date = new Date(dateInfo);
    const monthDict = {1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "May", 6: 
        "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Dec"};
    const getMeridiem = (hour) => hour < 12 ? "AM" : "PM";
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const meridiem = getMeridiem(hour);
    const month = date.getMonth();
    const day = date.getDay();
    const year = date.getFullYear();

    return (
        <div>
            {hour}:{minutes} {meridiem} &middot; {monthDict[month]} {day}, {year} &middot; <strong>{getViews(views)}</strong> Views
        </div>
    );
}


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

function getViews(views) {
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

function PostPage({users}) {
    const {userID, postID} = useParams();
    const navigate = useNavigate();

    const posts = JSON.parse(window.localStorage.getItem("posts"));
    const postInfo = posts.find((post) => post.userID === userID && post.postID === postID);
    const userInfo = users.find((user) => user.userID);
    
    return(
    <div className='light-mode-middle-container'>
        <div className="flex px-2 w-full">
            <div className="flex gap-[20px] w-full">
                <div className="text-2xl cursor-pointer" onClick={() => navigate("/")}> &larr;</div>
                <div className="text-xl font-bold"> Post</div>
            </div>
        </div>
        <div className="flex flex-col">
            <div className="flex flex-col px-2.5 gap-y-4">
                <div className='flex gap-[10px] w-full'>
                    <div className='flex flex-col pt-[20px] w-full'>
                        <div className='flex gap-[10px] w-full'>
                            <div className='profile-img self-center'>
                                B
                            </div>
                            <div className='user-display-container w-full'>
                                <div className='flex flex-col'>
                                <div className="font-bold">{userInfo.name}</div>
                                <div>@{userInfo.userID}</div>
                                </div>
                                
                                <div className='more-options'>
                                &#8230;
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="post-content">
                    {postInfo.postText}
                </div>
                <PostFooterInfo dateInfo={postInfo.datePosted} views={postInfo.metrics.views}/>
                <div className='flex gap-[70px]'>
                    <div className='post-option-item'> <div>&#128488;</div> <div>{postInfo.metrics.comments}</div></div>
                    <div className='post-option-item'> <div>&#10227;</div> <div>{postInfo.metrics.reposts}</div></div>
                    <div className='post-option-item'> <div>&hearts;</div> <div>{postInfo.metrics.likes}</div></div>
                    <div className='post-option-item'> <div>&#128278;</div> <div>{postInfo.metrics.bookmarks}</div></div>
                    <div className='flex ml-auto'>
                        <div className='post-option-item'>&#128278;</div>
                    </div>
                </div>
            </div>
            <div className="px-2.5">
                <div className="flex py-2 post gap-[10px]">
                    <div className="profile-img">
                        A
                    </div>
                    <input className="w-full outline-none" placeholder="Post a reply"></input>
                    <button className="light-mode-btn">Reply</button>
                </div>
            </div>
        </div>
        <div className="flex flex-col">
            <Post />
        </div>
    </div>
    );
}

export default PostPage