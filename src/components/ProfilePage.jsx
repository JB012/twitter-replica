import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react'
import Post from './Post';
import '../index.css'



function createRepostsTimeLine(posts, user, profilePosts, setProfilePosts, action) {
    if (action === "Post") {
        const repostedPosts = [];
        const filteredPosts = posts.filter((post) => post.userID === "user");
        user.postAction.reposted.forEach((postID) => {
            const findPost = posts.find((post) => post.postID === postID);
            repostedPosts.push(findPost);
        })

        setProfilePosts([...repostedPosts, ...filteredPosts, ...profilePosts]);
    }
    else if (action === "Reply") {
        const repliedPosts = [];
        posts.forEach((post) => {
            post.comments.forEach((commentPostID) => {
                const findPost = posts.find((postElem) => postElem.postID === commentPostID);
                if (findPost.userID === "user") {
                    repliedPosts.push({...post, url: `http://${window.location.hostname}:5173/${post}/status/${post.postID}`});
                }
            });
        });

        setProfilePosts([...repliedPosts, ...profilePosts]);
    }
    else if (action === "Likes") {
        const likedPosts = [];
        user.postAction.liked.forEach((postID) => {
            const findPost = posts.find((post) => post.postID === postID);
            likedPosts.push(findPost);
        });

        setProfilePosts([...likedPosts, ...profilePosts]);

    }
    else {
        //Media section
        setProfilePosts([]);
    }
}

function ProfilePage({handleDelete, handlePostAction, handleViews, posts, users}) {
    const {profile} = useParams();
    const user = users.find((user) => user.userID === profile);
    const [profilePosts, setProfilePosts] = useState([]);
    const [postTab, setPostTab] = useState("Post");

    useEffect(() => {
        createRepostsTimeLine(posts, user, profilePosts, setProfilePosts, postTab);
    }, []);

    return (
        <div className="light-mode-middle-container">
            <div className="flex flex-col relative">
                <div className="flex gap-[20px] w-full">
                    <div>&larr;</div>
                    <div className="flex flex-col">
                        <div className='font-bold'>
                            Posts
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
                    <div className='text-xl font-bold'>
                        {user.name}
                    </div>
                    <div>
                        @{user.userID}
                    </div>
                    <div className='py-3'>    	
                        &#128197; Joined {user.profileInfo.dateJoined}
                    </div>
                    <div className='flex gap-3'>
                        <div>
                            <strong>{user.followingNum}</strong> Following
                        </div>
                        <div>
                            <strong>{user.followersNum}</strong> Followers
                        </div>
                    </div>
                </div>
                <div className='flex w-full justify-between pt-5'>
                    <button className={`profile-toggle-page-btn ${postTab === "Post" ? "bg-blue-50" : ""}`} onClick={() => setPostTab("Post")}>Post</button>
                    <button className={`profile-toggle-page-btn ${postTab === "Reply" ? "bg-blue-50" : ""}`} onClick={() => setPostTab("Reply")}>Replies</button>
                    <button className={`profile-toggle-page-btn ${postTab === "Media" ? "bg-blue-50" : ""}`} onClick={() => setPostTab("Media")}>Media</button>
                    <button className={`profile-toggle-page-btn ${postTab === "Likes" ? "bg-blue-50" : ""}`} onClick={() => setPostTab("Likes")}>Likes</button>
                </div>
                <div className={`flex flex-col h-full ${profilePosts.length === 0 ? "text-center justify-center" : ""}`}>
                    {
                        profilePosts.length !== 0 ? profilePosts.map((post) => {
                            if (postTab !== "Reply") {
                                return < Post {...post} url={""} reposted={user.postAction.reposted.includes(post.postID) ? true : false} handleDelete={handleDelete} handlePostAction={handlePostAction} handleViews={handleViews} key={post.postID} />
                            }
                            else if (postTab !== "Media") {
                                return < Post {...post} url={post.url} reposted={user.postAction.reposted.includes(post.postID) ? true : false} handleDelete={handleDelete} handlePostAction={handlePostAction} handleViews={handleViews} key={post.postID} />
                            
                            }
                            else {
                                //Media
                                "No media found"
                            }
                        } ): "No posts found"
                    }
                </div>
                
            </div>
        </div>
    );
}

export default ProfilePage