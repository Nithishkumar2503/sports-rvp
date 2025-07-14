import { FormLabel } from "..";
import Select from "react-select";
const SelectComponent = ({ label, mandatory, optional,options }) => {
    
  return (
    <>
      <div id="selecst-container">
        <FormLabel label={label} mandatory={mandatory} optional={optional} />
        <Select options={options}  className="px-4 20rem" />
      </div>
    </>
  );
};

export default SelectComponent;
