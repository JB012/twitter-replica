import '../index.css'

function TrendingOptions({displayMode}) {
    return (
       <div id="home-right">
        <input className={`pl-2.5 rounded-xl border border-gray-500 ${displayMode === "Light" ? "placeholder-black text-black" : "placeholder-white text-white"}`} placeholder="Search" />
        <div className={`h-[460px] border border-gray-500 side-view-container ${displayMode === "Light" ? "text-black" : "text-white"}`}>
            <div className='text-2xl font-bold pb-1'>Trends</div>
            <div className='flex flex-col h-full justify-around'>
              <div className='trend-item'>
                <div className='trend-sub'>Technology &middot; Trending</div>
                <div className='trend-main'>React</div>
                <div className='trend-sub'>3,000 posts</div>
              </div>
              
              <div className='trend-item'>
                <div className='trend-sub'>Technology &middot; Trending</div>
                <div className='trend-main'>JavaScript</div>
                <div className='trend-sub'>1502 posts</div>
              </div>
              
              <div className='trend-item'>
                <div className='trend-sub'>Technology &middot; Trending</div>
                <div className='trend-main'>TypeScript</div>
                <div className='trend-sub'>612 posts</div>
              </div>
              <div className='trend-item'>
                <div className='trend-sub'>Technology &middot; Trending</div>
                <div className='trend-main'>Code</div>
                <div className='trend-sub'>125 posts</div>
              </div>
            </div>
        </div>  
        <div className={`sticky top-0 h-[30vh] border border-gray-500 side-view-container ${displayMode === "Light" ? "text-black" : "text-white"}`}>
            <div className='text-xl font-bold pb-1'>Suggested Follows</div>
            <div className='w-full'>
              <div className='flex gap-[10px]'>
                  <div className={`profile-img self-center ${displayMode === "Light" ? "border-black text-black bg-black" : "border-white text-white bg-white"}`}>
                    B
                  </div>
                  <div className='flex flex-col'>
                    <div>name</div>
                    <div>@name</div>
                  </div>
                  <button className={`ml-auto ${displayMode === "Light" ? "light-mode-btn" : "dark-mode-btn"}`}>Follow</button>
              </div>
            </div>
        </div>       
      </div>
    );
}

export default TrendingOptions;