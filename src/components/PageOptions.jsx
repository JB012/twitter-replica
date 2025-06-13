import '../index.css'

function PageOptions() {
    return (
        <div id="home-left">
          <div className='flex flex-col items-end sticky self-start w-full gap-y-[50px] top-0'>
            <div id='pages-option-container h-full'>
                <div className='flex flex-col pt-8 gap-y-10 justify-around h-full'>
                  <div className='page-option-item'>
                    <div className='profile-img'></div>
                    <a href="/" className='home-left-option'>Home</a>
                  </div>
                  <div className='page-option-item'>
                    <div className='profile-img'></div>
                    <a href="/dailies" className='home-left-option'>Dailies</a>
                  </div>
                  <div className='page-option-item'>
                    <div className='profile-img'></div>
                    <a href="/profile" className='home-left-option'>Profile</a>
                  </div>
                  <div className='page-option-item'>
                    <div className='profile-img'></div>
                    <a href="/" className='home-left-option'>Dark Mode</a>
                  </div> 
                </div>
              <div className='py-10'>
                <button id="side-post-button" className='light-mode-btn w-[200px] h-[50px]'>Post</button>
              </div>
              <div className='flex gap-2.5 w-full'>
                <div className='flex flex-col pt-5 w-full'>
                    <div className='flex gap-2.5'>
                        <div className='profile-img self-center'>
                          B
                        </div>
                        <div className='user-display-container justify-between w-full'>
                          <div className='flex flex-col'>
                            <div>name</div>
                            <div>@name</div>
                          </div>
                          
                          <div className='font-bold text-xl'>
                            &#8230;
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
          
        </div>
      </div>
    );

}

export default PageOptions;