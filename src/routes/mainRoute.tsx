import { MenuCard } from "../components/index.js";
import { catagoryList } from "../utils/global-list";
import "./mainRoute.css";
const MainRoute = () => {
    return (
        <div id='main-route'>
            <div id="main-menu">
                {catagoryList.map((item) => (
                    <MenuCard props={item} />
                ))}
            </div>
        </div>
    )
}

export default MainRoute