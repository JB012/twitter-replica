import '../index.css'

function TrendingOptions() {
    return (
       <div id="home-right">
        <input className='pl-2.5 pt-2.5' placeholder="Search" />
        <div className="h-[460px] side-view-container">
            <div className='text-2xl font-bold pb-1'>Trends</div>
            <div className='flex flex-col h-full justify-around'>
              <div className='trend-item'>
                <div className='trend-sub'>Trending in United States</div>
                <div className='trend-main'>JavaScript</div>
                <div className='trend-sub'>3,000 posts</div>
              </div>
              
              <div className='trend-item'>
                <div className='trend-sub'>Trending in United States</div>
                <div className='trend-main'>JavaScript</div>
                <div className='trend-sub'>3,000 posts</div>
              </div>
              
              <div className='trend-item'>
                <div className='trend-sub'>Trending in United States</div>
                <div className='trend-main'>JavaScript</div>
                <div className='trend-sub'>3,000 posts</div>
              </div>
              <div className='trend-item'>
                <div className='trend-sub'>Trending in United States</div>
                <div className='trend-main'>JavaScript</div>
                <div className='trend-sub'>3,000 posts</div>
              </div>
            </div>
        </div>  
        <div className='sticky top-0 h-[30vh] side-view-container'>
            <div className='text-xl font-bold pb-1'>Suggested Follows</div>
            <div className='w-full'>
              <div className='flex gap-[10px]'>
                  <div className='profile-img self-center'>
                    B
                  </div>
                  <div className='flex flex-col'>
                    <div>name</div>
                    <div>@name</div>
                  </div>
                  <button className='ml-auto light-mode-btn'>Follow</button>
              </div>
            </div>
        </div>       
      </div>
    );
}

export default TrendingOptions;