import PostOptions from "./PostOptions"
import Post from "./Post"
import '../index.css'

function PostPage() {
    return(
    <div className='light-mode-middle-container'>
        <div className="flex px-2 w-full">
            <div className="flex gap-[20px] w-full">
                <div className="text-xl"> &larr;</div>
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
                                <div className="font-bold">name</div>
                                <div>@name</div>
                                </div>
                                
                                <div className='more-options'>
                                &#8230;
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="post-content">
                    This is a tweet.
                </div>
                <div>
                    3:31 PM &middot; Jun 9, 2025 &middot; <strong>95K</strong> Views
                </div>
                <div className='flex gap-[70px]'>
                    <div className='post-option-item'> <div>&#128488;</div> <div>100</div></div>
                    <div className='post-option-item'> <div>&#10227;</div> <div>200</div></div>
                    <div className='post-option-item'> <div>&hearts;</div> <div>300</div></div>
                    <div className='post-option-item'> <div>&#128278;</div> <div>282</div></div>
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