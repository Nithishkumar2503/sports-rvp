import { FormLabel } from "..";
import "./input-text.css";
function inputText({ name, label }) {
  return (
    <>
      <FormLabel mandatory label={label} />
      <input name={name} className="input-text" id="input-text" type="text" />
    </>
  );
}

export default inputText;
