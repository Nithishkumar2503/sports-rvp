import { FormLabel } from "..";
import "./date-picker.css";

const DatePicker = ({ onChange, label, optional, mandatory,id="" }) => {
  function showDatePicker() {
    const input = document.getElementById("date-picker"+id);
    
    // Prefer showPicker() if supported (Chrome 97+)
    if (input.showPicker) {
      input.showPicker();
    } else {
      input.focus(); // fallback for older browsers
    }
  }
  return (
    <>
      <FormLabel label={label} />
      <div id="date-picker-container">
        <input onClick={showDatePicker} id={"date-picker"+id} type="date" />
      </div>
    </>
  );
};
export default DatePicker;
