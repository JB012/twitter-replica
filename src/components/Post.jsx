import '../index.css'
import PostOptions from './PostOptions'

function Post() {
    return (
        <div className='post'>
            <div className='flex w-full px-2.5 gap-[10px]'>
                <div className='profile-img'>
                B
                </div>
                <div className='flex flex-col w-full'>
                <div className='flex justify-between gap-[4px]'>
                    <div className='profile-post-name'>
                    name
                    </div>
                    <div className='profile-post-id' >
                    @name
                    </div>
                    <div className='post-time-posted'>
                    &middot;  time
                    </div>
                    <div className='ml-auto'>
                    &#8230;
                    </div>
                </div>
                <div className='post-content'>
                    Hello this is my tweet.
                </div>
                < PostOptions />
                </div>
            </div>
        </div>
    );
}

export default Post;