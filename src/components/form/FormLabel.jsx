import "./formLabel.css";

const formLabel = ({ label, mandatory, optional, name, id }) => {
  return (
    <>
      <div id="form-label-container">
        <dt className="formLabel">{label}</dt>
        <dt id="form-indicator">{mandatory ? "Required*" : optional ? "Optional" : ""}</dt>
      </div>
    </>
  );
};
export default formLabel;
