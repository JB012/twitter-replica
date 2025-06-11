import '../index.css'

function PostOptions() {
    return(
    <div className='flex'>
        <div className='post-option-item'> <div>&#128488;</div> <div>100</div></div>
        <div className='post-option-item'> <div>&#10227;</div> <div>200</div></div>
        <div className='post-option-item'> <div>&hearts;</div> <div>300</div></div>
        <div className='post-option-item'> <div>&#128202;</div> <div>60.4k</div></div>
        <div className='flex ml-auto'>
            <div className='post-option-item'>&#128278;</div>
            <div className='post-option-item'>&#128278;</div>
        </div>
    </div>
    );
}

export default PostOptions;