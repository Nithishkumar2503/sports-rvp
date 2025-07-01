import "./bookingTurf.css";
import { FaRegStar } from "react-icons/fa";
import { InputText } from "../../components";
const bookingTurf = ({ turfDetail }) => {
  const { name, complementry, address, city, state, country, pincode, phone } =
    turfDetail;
  return (
    <>
      <div id="turf-book-container">
        <div id="turf-booking-head">
          <div id="turf-rating">
            <h1>{name}</h1>
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
        <div id="turf-booking-body">
          <InputText />
        </div>
      </div>
    </>
  );
};

export default bookingTurf;
