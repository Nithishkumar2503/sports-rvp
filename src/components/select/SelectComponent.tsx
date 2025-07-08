import { FormLabel } from "..";
import "./selectCompoent.css";
import Select from "react-select";
const SelectComponent = ({ label, mandatory, optional,options }) => {
    
  return (
    <>
      <div id="selecst-container">
        <FormLabel label={label} mandatory={mandatory} optional={optional} />
        <Select options={options}  className="select-input" />
      </div>
    </>
  );
};

export default SelectComponent;
