import { FormLabel } from "..";
import "./time-picker.css";

const timePicker = ({ onChange, label, optional, mandatory }) => {
  function showTimePicker() {
    const input = document.getElementById("time-picker");

    // Prefer showPicker() if supported (Chrome 97+)
    if (input.showPicker) {
      input.showPicker();
    } else {
      input.focus(); // fallback for older browsers
    }
  }
  return (
    <div id="time-picker-container">
      <FormLabel label={label} />
      <div onClick={showTimePicker} id="time-picker-content">
        <input id="time-picker" type="time" />
      </div>
    </div>
  );
};
export default timePicker;
