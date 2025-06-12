import '../index.css'

function ProfilePage() {
    return (
        <div className="light-mode-middle-container">
            <div className="flex flex-col relative">
                <div className="flex gap-[20px] w-full">
                    <div>&larr;</div>
                    <div className="flex flex-col">
                        <div className='font-bold'>
                            Name
                        </div>
                        <div>
                            100 posts
                        </div>
                    </div>
                </div>
                <div className="w-full bg-black h-[200px] -z-1">
                    h
                </div>
                <div className='flex w-full justify-between'>
                    <div className='border border-solid border-amber-200 min-w-30 h-30 rounded-full absolute top-47 left-5 text-amber-50'>
                        A
                    </div>
                    <button className='border rounded-full absolute right-5 top-65 px-4 py-2 pt-1.5 font-semibold'>Edit Profile</button>
                </div>
                <div className='flex flex-col pt-18 px-2.5'>
                    <div className=''>
                        name
                    </div>
                    <div>
                        @name
                    </div>
                    <div className='py-3'>    	
                        &#128197; Joined September 2016
                    </div>
                    <div className='flex gap-3'>
                        <div>
                            <strong>116</strong> Following
                        </div>
                        <div>
                            <strong>111</strong> Followers
                        </div>
                    </div>
                </div>
                <div className='flex w-full justify-between pt-5'>
                    <button className='profile-toggle-page-btn'>Post</button>
                    <button className='profile-toggle-page-btn'>Replies</button>
                    <button className='profile-toggle-page-btn'>Media</button>
                    <button className='profile-toggle-page-btn'>Likes</button>
                </div>

            </div>
        </div>
    );
}

export default ProfilePage