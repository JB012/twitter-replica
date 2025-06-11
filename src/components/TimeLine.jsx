import Post from './Post'
import '../index.css'

function TimeLine() {
    return(
        <div className='light-mode-middle-container'>
          <div className='flex justify-around px-0 py-2.5'>
            <div>For You</div>
            <div>Following</div>
          </div>
          <div className='flex flex-col justify-center p-[10px]'>
            <div className='flex'>
              <div className='profile-img'>
                A
              </div>
              <input className=' min-w-[80%] min-h-[50%] text-xl px-2.5 py-0 border-[none] outline-none' max={280} placeholder="Create a post"></input>
            </div>
            <button className='light-mode-btn self-end'>Post</button>
          </div>
          <div className='flex flex-col'>
            < Post />
          </div>
        </div>
    );
}

export default TimeLine;