import '../index.css'
import PostOptions from './PostOptions'
import {useNavigate} from 'react-router-dom'

function Post({content, userName, userID, postID}) {
    const navigate = useNavigate();

    return (
        <div className='post cursor-pointer' onClick={() => navigate(`${userID}/status/${postID}`)}>
            <div className='flex w-full px-2.5 gap-[10px]'>
                <div className='profile-img'>
                B
                </div>
                <div className='flex flex-col w-full'>
                <div className='flex justify-between gap-[4px]'>
                    <div className='profile-post-name'>
                    {userName}
                    </div>
                    <div className='profile-post-id' >
                    @{userID}
                    </div>
                    <div className='post-time-posted'>
                    &middot;  time
                    </div>
                    <div className='ml-auto'>
                    &#8230;
                    </div>
                </div>
                <div className='post-content'>
                    {content}
                </div>
                < PostOptions />
                </div>
            </div>
        </div>
    );
}

export default Post;