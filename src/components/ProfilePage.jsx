import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import Post from './Post';
import '../index.css'

function ProfilePosts({postTab, user, posts, handleDelete, handlePostAction, handleViews}) {
    if (postTab === "Likes") {
        if (user.postAction.liked.length === 0) {
            return (<div className='text-center justify-center'>
                No post liked
                </div>)
        }
        else {
            return (<div className='flex flex-col h-full'>
            {
                user.postAction.liked.map((postID) => {
                    const findPost = posts.find((post) => post.postID === postID);
                    return <Post {...findPost} url={""} reposted={false} handleDelete={handleDelete} handlePostAction={handlePostAction} handleViews={handleViews} key={findPost.postID} />
                })
            }
            </div>);
        }
    }
    else if (postTab === "Posts") {
        const repostedPosts = []
        const filteredPosts = posts.filter((post) => post.userID === "user");
        user.postAction.reposted.forEach((postID) => {
            const findPost = posts.find((post) => post.postID === postID);
            repostedPosts.push(findPost);
        });
        
        const allPosts = [...new Set([...repostedPosts, ...filteredPosts])];

        if (allPosts.length === 0) {
            return (<div className='text-center justify-center'>
                No posts available
                </div>)
        }
        else {
            return (<div className='flex flex-col h-full'>
            {allPosts.map((post) => {
                return <Post {...post} url={""} reposted={false} handleDelete={handleDelete} handlePostAction={handlePostAction} handleViews={handleViews} key={post.postID} />
            })}
            </div>)
        }
    }
    else if (postTab === "Replies") {
        const repliedPosts = [];
        posts.forEach((post) => {
            post.comments.forEach((commentPostID) => {
                const findPost = posts.find((postElem) => postElem.postID === commentPostID);
                if (findPost.userID === "user") {
                    repliedPosts.push({...post, url: `http://${window.location.hostname}:5173/${post}/status/${post.postID}`});
                }
            });
        });

        if (repliedPosts.length === 0) {
            return (<div className='text-center justify-center'>
                No replies available
                </div>)
        }
        else {
            return (<div className='text-center justify-center'> 
            {repliedPosts.map((post) => {
                return <Post {...post} url={post.url} reposted={false} handleDelete={handleDelete} handlePostAction={handlePostAction} handleViews={handleViews} key={post.postID} />
            })}
            </div>)
        }
    }
    else {
        return (<div className='text-center justify-center'>
            No media posted
        </div>)
    }
}

function ProfilePage({displayMode, handleDelete, handlePostAction, handleViews, posts, users}) {
    const {profile} = useParams();
    const user = users.find((user) => user.userID === profile);
    const [postTab, setPostTab] = useState("Posts");
    const navigate = useNavigate();

    return (
        <div className="light-mode-middle-container border border-gray-500 text-gray-500">
            <div className="flex flex-col relative">
                <div className="flex gap-[20px] px-1.5 py-1.5 w-full">
                    <div className='font-bold text-2xl cursor-pointer' onClick={() => navigate(-1)}>&larr;</div>
                    <div className="flex flex-col">
                        <div className='text-xl'>
                            Profile
                        </div>
                    </div>
                </div>
                <div className={`w-full text-center bg-gray-600 text-gray-600 h-[200px] -z-1`}>
                    h
                </div>
                <div className='flex w-full justify-between'>
                    <div className={`border text-center border-solid ${displayMode === "Light" ? "border-black text-black bg-black" : "border-white text-white bg-white"} min-w-30 h-30 rounded-full absolute top-47 left-5 text-amber-50`}>
                        A
                    </div>
                    <button className={`border ${displayMode === "Light" ? "text-black" : "text-white"} rounded-full absolute right-5 top-65 px-4 py-2 pt-1.5 font-semibold`}>Edit Profile</button>
                </div>
                <div className='flex flex-col pt-18 px-2.5'>
                    <div className={`text-xl font-bold ${displayMode === "Light" ? "text-black" : "text-white"}`}>
                        {user.name}
                    </div>
                    <div>
                        @{user.userID}
                    </div>
                    <div className='py-1.5'>
                        {user.profileInfo.bio}
                    </div>
                    <div className='py-3'>    	
                        &#128197; Joined {user.profileInfo.dateJoined}
                    </div>
                    <div className='flex gap-3'>
                        <div>
                            <strong className={displayMode === "Light" ? "text-black": "text-white"}>{user.followingNum}</strong> Following
                        </div>
                        <div>
                            <strong className={displayMode === "Light" ? "text-black": "text-white"}>{user.followersNum}</strong> Followers
                        </div>
                    </div>
                </div>
                <div className='flex w-full justify-between pt-5 text-gray-500'>
                    <button className={`profile-toggle-page-btn ${postTab === "Posts" ? `${displayMode === "Light" ? "text-black" : "text-white"}` : ""}`} onClick={() => setPostTab("Posts")}>Post</button>
                    <button className={`profile-toggle-page-btn ${postTab === "Replies" ? `${displayMode === "Light" ? "text-black" : "text-white"}` : ""}`} onClick={() => setPostTab("Replies")}>Replies</button>
                    <button className={`profile-toggle-page-btn ${postTab === "Media" ? `${displayMode === "Light" ? "text-black" : "text-white"}` : ""}`} onClick={() => setPostTab("Media")}>Media</button>
                    <button className={`profile-toggle-page-btn ${postTab === "Likes" ? `${displayMode === "Light" ? "text-black" : "text-white"}` : ""}`} onClick={() => setPostTab("Likes")}>Likes</button>
                </div>
                <ProfilePosts posts={posts} postTab={postTab} user={user} handleDelete={handleDelete} handlePostAction={handlePostAction} handleViews={handleViews} />
                
            </div>
        </div>
    );
}

export default ProfilePage