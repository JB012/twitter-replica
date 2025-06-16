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
    
    return "";
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
    (<div className='flex'>
        <div className="post-option-item hover:text-blue-300"> <div>&#128488;</div> <div>{comments}</div></div>
        <div className={`post-option-item hover:text-green-500 ${handleTextColor(postID, findUser, "reposted")}`} onClick={() => handlePostAction(postID, "reposted")}> <div>&#10227;</div> <div>{reposts}</div></div>
        <div className={`post-option-item hover:text-red-500 ${handleTextColor(postID, findUser, "liked")}`} onClick={() => handlePostAction(postID, "liked")}> <div>&hearts;</div> <div>{likes}</div></div>
        <div className={`post-option-item hover:text-blue-300`}> <div>&#128202;</div> <div>{getViews(views)}</div></div>
        <div className='flex ml-auto'>
            <div className={`post-option-item hover:text-blue-300 ${handleTextColor(postID, findUser, "bookmarked")}`}>&#128278;</div>
            <div className='post-option-item hover:text-blue-300'>&#128278;</div>
        </div>
    </div>) :
    ( <div className='flex gap-[70px]'>
        <div className='post-option-item hover:text-blue-300'> <div>&#128488;</div> <div>{comments}</div></div>
        <div className={`post-option-item hover:text-green-500 ${handleTextColor(postID, findUser, "reposted")}`} onClick={() => handlePostAction(postID, "reposted")}> <div>&#10227;</div> <div>{reposts}</div></div>
        <div className={`post-option-item hover:text-red-500 ${handleTextColor(postID, findUser, "liked")}`} onClick={() => handlePostAction(postID, "liked")}> <div>&hearts;</div> <div>{likes}</div></div>
        <div className={`post-option-item hover:text-blue-300 ${handleTextColor(postID, findUser, "bookmarked")}`} onClick={() => handlePostAction(postID, "bookmarked")}> <div>&#128278;</div> <div>{bookmarks}</div></div>
        <div className='flex ml-auto'>
            <div className='post-option-item'>&#128278;</div>
        </div>
    </div>
    )
    
    );
}

export default PostOptions;