import "./turfRoute.css";
import { SlotCard, TurfCard } from "../feature/index";
import { turfList } from "../store";
import { useState } from "react";
import { Modal } from "../components";
const TurfRoute = () => {
    const [isViewTurf, setViewTurf] = useState(false)

    const handleOnMouseEnter = (data) => {
        setViewTurf(true)
        console.log("from screen : ", data)
        console.log("isViewTurf :  ", isViewTurf)
    }
    return (
        <div id='turf-route-container'>
           {isViewTurf ? <Modal onClose={()=>setViewTurf(false)}/>:null}
            <SlotCard />
            <div id="turf-card-container">
                {turfList.map((item) => { return <TurfCard onCustomEvent={() => handleOnMouseEnter(item)} props={item} /> })}
            </div>
        </div>
    )
}

export default TurfRoute