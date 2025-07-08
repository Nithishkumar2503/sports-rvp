import { Button, LazyLoadImage } from "../../components";
import "./viewTurf.css";
import img from "../../assets/football-ground.jpg";
import { FaRegStar } from "react-icons/fa";

const viewTurf = ({ props, bookNow }) => {
  const { name, complementry, address, city, state, country, pincode, phone } =
    props;
  return (
    <>
      <div id="view-turf">
        <div id="turf-images">
          <LazyLoadImage image={img} />
        </div>
        <div id="name-btn">
          <h1 id="turf-name">{name}</h1>
          <Button
            onClick={bookNow}
            name={"Book Now"}
          />
        </div>
        <div id="turf-rating">
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </div>
        <div id="turf-complement">
          <dt>{complementry}</dt>
          <dt>{"contact : " + phone}</dt>
        </div>
        <div id="turf-address">
          <dt>{address ? address + ", " : ""}</dt>
          <dt>{city ? city + ", " : ""}</dt>
          <dt>{state ? state + ", " : ""}</dt>
          <dt>{country ? country + ", " : ""}</dt>
          <dt>{pincode ? pincode + ", " : ""}</dt>
        </div>
      </div>
    </>
  );
};
export default viewTurf;
