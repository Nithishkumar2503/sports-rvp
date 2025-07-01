import turf from "../../assets/football-ground.jpg";
import { LazyLoadImage } from "../../components";
import "./turfCard.css"
const TurfCard = ({ props, onCustomEvent }) => {
    const { id, name, address, city, state, country } = props
    const onClick = (data) => {
        onCustomEvent({ dispatch: data })
    }
    return (
        <div onClick={onClick} className="turfcard" id={id}>
            <div id="turf-card-img">
                 <LazyLoadImage image={turf}/>
            </div>
            <h1>{name+" sports arena"}</h1>
            <div className="turfcard-address">
                <h6>{address}</h6>
                <h6>{city}</h6>
                <h6>{state}</h6>
                <h6>{country}</h6>
            </div>

        </div>
    )
}

export default TurfCard