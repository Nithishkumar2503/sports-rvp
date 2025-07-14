import { FormLabel } from "..";
function inputText({ name, label }) {
  return (
    <>
      <FormLabel mandatory label={label} />
      <input
        name={name}
        className="px-[10px] py-[8px] w-[280px] h-[20px] rounded-[4px] bg-white border border-gray-400 text-[16px] text-gray-500 mx-2 focus:border-blue-500 focus:outline-none"
        id="input-text"
        type="text"
      />
    </>
  );
}

export default inputText;
