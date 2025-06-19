import '../index.css'

function handleCheck(action) {
    const findUser = JSON.parse(localStorage.getItem("users")).find((user) => user.userID === "user");
    if (action === "liked") {
        if (findUser.postAction.liked.length >= 3) {
            return true;
        }      
    }
    else if (action === "reposted") {
        if (findUser.postAction.reposted.length >= 3) {
            return true;
        }
    }
    else if (action === "bookmarked") {
        if (findUser.postAction.bookmarked.length >= 3) {
            return true;
        }
    }

    return false;
}

function DailiesPage({displayMode}) {
    return (
        <div className={`light-mode-middle-container px-2.5 border border-gray-500 ${displayMode === "Light" ? "text-black" : "text-white"}`}>
            <div className="py-2.5 text-xl font-bold">
                Dailies
            </div>
            <div className="pt-5 text-lg">
                Remaining Time: 11:49
            </div>
            <div className="text-lg py-5">
                <ul>
                    <div className="flex py-5 gap-2.5">
                        <input type="radio" disabled="true" checked={handleCheck("liked")}/><li>Like 3 Posts</li>
                    </div>
                    <div className="flex py-5 gap-2.5">
                        <input type="radio" disabled="true" checked={handleCheck("reposted")}/><li>Repost 3 Posts</li>
                    </div>
                    <div className="flex py-5 gap-2.5">
                        <input type="radio" disabled="true" checked={handleCheck("bookmarked")}/><li>Bookmark 3 Posts</li>
                    </div>
                </ul>
            </div>
            <div className="text-lg">
                Reward: Verified Mode
            </div>
        </div>
    );
}

export default DailiesPage;