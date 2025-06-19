import '../index.css'

function handleTextColor(postID, user, action) {
    if (action === "liked") {
        if (user.postAction.liked.includes(postID)) {
            return "text-red-500";
        }
    }
    else if (action === "reposted") {
        if (user.postAction.reposted.includes(postID)) {
            return "text-green-500";
        }
    }
    else if (action === "bookmarked") {
        if (user.postAction.bookmarked.includes(postID)) {
            return "text-blue-300";
        }
    }
    
    return "text-gray-700";
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

function PostOptions({expanded, comments, reposts, bookmarks, likes, views, postID, handlePostAction}) {
    const findUser = JSON.parse(localStorage.getItem("users")).find((user) => user.userID === "user");
    
    return(
        expanded === false ?
    (<div className='flex px-2.5'>
        <div className={`post-option-item hover:text-blue-300 ${handleTextColor(postID, findUser, "commented")}}`}> 
            <div>
            <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
                <path d="M 6.25 6.25 L 20.25 6.25 L 20.25 15.25 16.25 15.25 17.25 19.25 14.25 15.25 6.25 15.25 Z" stroke="rgb(76, 76, 76)" />
            </svg>
            </div> 
            <div className='text-gray-700'>{comments}</div></div>
        <div className={`post-option-item hover:text-green-500 ${handleTextColor(postID, findUser, "reposted")}`} onClick={() => handlePostAction(postID, "reposted")}> <div>&#10227;</div> <div>{reposts}</div></div>
        <div className={`post-option-item hover:text-red-500 ${handleTextColor(postID, findUser, "liked")}`} onClick={() => handlePostAction(postID, "liked")}> <div>&hearts;</div> <div>{likes}</div></div>
        <div className={`post-option-item hover:text-blue-300`}> 
            <div>
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" x2="0" y1="20" y2="10" stroke="rgb(76, 76, 76)" stroke-width="2"/>
                    <line x1="3" x2="3" y1="20" y2="15" stroke="rgb(76, 76, 76)" stroke-width="1"/>
                    <line x1="6" x2="6" y1="20" y2="11" stroke="rgb(76, 76, 76)" stroke-width="1"/>
                    <line x1="9" x2="9" y1="20" y2="7" stroke="rgb(76, 76, 76)" stroke-width="1"/>
                </svg>
            </div> 
            <div className='text-gray-700'>
                {getViews(views)}
            </div>
        </div>
        <div className='flex ml-auto'>
            <div className={`post-option-item hover:text-blue-300 ${handleTextColor(postID, findUser, "bookmarked")}`}>
                <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 6.25 6.25 L 18.5 6.25 18.5 25 12.5 15.5 6.25 25 Z" stroke="rgb(76, 76, 76)" fill="transparent"/>
                </svg>
            </div>
            <div className='post-option-item hover:text-blue-300'>
                <svg className="pt-0.5" width="25" height="25" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20.5" cy="1.5" r="1.5" fill="rgb(76, 76, 76)" />
                    <line x1="20.5" x2="6.5" y1="1.5" y2="12.5" stroke="rgb(76, 76, 76)" />
                    <circle cx="6.5" cy="12.5" r="1.5" fill="rgb(76, 76, 76)" />
                    <line x1="6.5" x2="20.5" y1="12.5" y2="20.5" stroke="rgb(76, 76, 76)"/>
                    <circle cx="20.5" cy="20.5" r="1.5" fill="rgb(76, 76, 76)" />
                </svg>
            </div>
        </div>
    </div>) :
    <div className='flex gap-[70px] cursor-pointer'>
        <div className="post-option-item hover:text-blue-300 text-gray-700"> 
            <div>
            <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
                <path d="M 6.25 6.25 L 20.25 6.25 L 20.25 15.25 16.25 15.25 17.25 19.25 14.25 15.25 6.25 15.25 Z" stroke="rgb(76, 76, 76)" />
            </svg>
            </div>
            <div>
                {comments}
            </div>
        </div>
        <div className={`post-option-item hover:text-green-500 ${handleTextColor(postID, findUser, "reposted")}`} onClick={() => handlePostAction(postID, "reposted")}> <div>&#10227;</div> <div>{reposts}</div></div>
        <div className={`post-option-item hover:text-red-500 ${handleTextColor(postID, findUser, "liked")}`} onClick={() => handlePostAction(postID, "liked")}> <div>&hearts;</div> <div>{likes}</div></div>
        <div className={`post-option-item hover:text-blue-300 ${handleTextColor(postID, findUser, "bookmarked")}`} onClick={() => handlePostAction(postID, "bookmarked")}> 
            <div>
                <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 6.25 6.25 L 18.5 6.25 18.5 25 12.5 15.5 6.25 25 Z" stroke="rgb(76, 76, 76)" fill="transparent"/>
                </svg>
            </div> 
            <div>{bookmarks}</div></div>
        <div className='flex ml-auto'>
            <div className='post-option-item'>

            <svg className="pt-0.5" width="25" height="25" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20.5" cy="1.5" r="1.5" fill="rgb(76, 76, 76)" />
                <line x1="20.5" x2="6.5" y1="1.5" y2="12.5" stroke="rgb(76, 76, 76)" />
                <circle cx="6.5" cy="12.5" r="1.5" fill="rgb(76, 76, 76)" />
                <line x1="6.5" x2="20.5" y1="12.5" y2="20.5" stroke="rgb(76, 76, 76)"/>
                <circle cx="20.5" cy="20.5" r="1.5" fill="rgb(76, 76, 76)" />
            </svg>
            </div>
        </div>
    </div>
    
    
    );
}

export default PostOptions;