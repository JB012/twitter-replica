import '../index.css'

function PostOptions({comments, reposts, likes, bookmarks}) {
    return(
    <div className='flex'>
        <div className='post-option-item'> <div>&#128488;</div> <div>{comments}</div></div>
        <div className='post-option-item'> <div>&#10227;</div> <div>{reposts}</div></div>
        <div className='post-option-item'> <div>&hearts;</div> <div>{likes}</div></div>
        <div className='post-option-item'> <div>&#128202;</div> <div>{bookmarks}</div></div>
        <div className='flex ml-auto'>
            <div className='post-option-item'>&#128278;</div>
            <div className='post-option-item'>&#128278;</div>
        </div>
    </div>
    );
}

export default PostOptions;