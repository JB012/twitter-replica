import '../index.css'

function PageOptions({displayMode, handleDisplayMode}) {

    return (
        <div id="home-left" className={displayMode === "Light" ? "text-black" : "text-white"}>
          <div className='flex flex-col items-end sticky self-start w-full gap-y-[50px] top-0'>
            <div id='pages-option-container h-full'>
                <div className='flex flex-col pt-8 gap-y-10 justify-around h-full'>
                  <div className='page-option-item'>
                    <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
                      <path d="M 0 12.5 12.5 0 25 12.5 25 25 15.5 25 15.5 18.5 9.5 18.5 9.5 25 0 25 Z " fill={displayMode === "Light" ? "black" : "white"} />
                    </svg>
                    <a href="/" className='home-left-option'>Home</a>
                  </div>
                  <div className='page-option-item'>
                    <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 0 12.5 12.5 25 25 0 22 0 11.5 20 3 12.5 Z" fill={displayMode === "Light" ? "black" : "white"} />
                    </svg>
                    <a href="/dailies" className='home-left-option'>Dailies</a>
                  </div>
                  <div className='page-option-item'>
                    <svg width="25" height="30" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="14" cy="13" r="7" fill={displayMode === "Light" ? "black" : "white"} />
                      <path d="M 8 28 C 11 15.5 17 15.5 20 28" fill={displayMode === "Light" ? "black" : "white"} />
                    </svg>
                    <a href="/user" className='home-left-option'>Profile</a>
                  </div>
                  <div className='page-option-item'>
                    <svg className={displayMode === "Dark" ? "hidden" : ""} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="black" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z"></path>
                    </svg>
                    <svg className={displayMode === "Light" ? "hidden" : ""} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"></path>
                      <path d="M12 2V3.5M12 20.5V22M19.0708 19.0713L18.0101 18.0106M5.98926 5.98926L4.9286 4.9286M22 12H20.5M3.5 12H2M19.0713 4.92871L18.0106 5.98937M5.98975 18.0107L4.92909 19.0714"></path>
                    </svg>
                    <button className='home-left-option' onClick={() => handleDisplayMode()}>{displayMode === "Light" ? "Dark Mode" : "Light Mode"}</button>
                  </div> 
                </div>
              <div className='py-10'>
                <button id="side-post-button" className={`${displayMode === "Light" ? "light-mode-btn" : "dark-mode-btn"} light-mode-btn w-[200px] h-[50px]`}>Post</button>
              </div>
              <div className='flex gap-2.5 w-full'>
                <div className='flex flex-col pt-5 w-full'>
                    <div className='flex gap-2.5'>
                        <div className={`profile-img self-center ${displayMode === "Light" ? "border-black text-black bg-black" : "border-white text-white bg-white"}`}>
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