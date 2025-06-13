function DailiesPage() {
    return (
        <div className="light-mode-middle-container px-2.5">
            <div className="py-2.5 text-xl font-bold">
                Dailies
            </div>
            <div className="pt-5 text-lg">
                Remaining Time: 11:49
            </div>
            <div className="text-lg py-5">
                <ul>
                    <div className="flex py-5 gap-2.5">
                        <input type="radio" disabled="true"/><li>Like 3 Posts</li>
                    </div>
                    <div className="flex py-5 gap-2.5">
                        <input type="radio" disabled="true"/><li>Repost 3 Posts</li>
                    </div>
                    <div className="flex py-5 gap-2.5">
                        <input type="radio" disabled="true"/><li>Comment on a Post</li>
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