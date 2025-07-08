import "./bookingTurf.css";
import { FaRegStar } from "react-icons/fa";
import {
  Button,
  DatePicker,
  FormWrapper,
  InputText,
  SelectComponent,
  TimePicker,
} from "../../components";
import { cityList } from "../../utils/global-list";
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
          <FormWrapper
            content={
              <div id="turf-booking-form">
                <InputText label={"Candidate Name"} />
                <InputText label={"Phone"} />
                <SelectComponent options={cityList} label={"Location"} />
                <DatePicker label={"Date"} />
                <div id="slot-time">
                  <div>
                  <TimePicker label={"From"} />
                  </div>
                  <div>
                  <TimePicker label={"To"} />
                  </div>
                </div>
                <Button name={"Pay now"} />
              </div >
            }
          ></FormWrapper>
        </div>
      </div>
    </>
  );
};

export default bookingTurf;
