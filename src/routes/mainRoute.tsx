import { MenuCard } from "../components/index.js";
import { catagoryList } from "../utils/global-list";
const MainRoute = () => {
    return (
        <div id='main-route' className="w-screen p-0 bg-slate-500 overflow-y-auto h-[calc(100vh - 7rem)]">
            <div id="main-menu" className="flex">
                {catagoryList.map((item) => (
                    <MenuCard props={item} />
                ))}
            </div>
        </div>
    )
}

export default MainRoute