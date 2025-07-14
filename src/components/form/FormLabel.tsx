
const formLabel = ({ label, mandatory, optional, name, id }) => {
  return (
    <>
      <div id="form-label-container" className="flex">
        <dt className="formLabel  text-[15px] p-2">{label}</dt>
        <dt id="form-indicator" className="text-[12px] my-auto text-gray-400">
          {mandatory ? "Required*" : optional ? "Optional" : ""}
        </dt>
      </div>
    </>
  );
};
export default formLabel;
