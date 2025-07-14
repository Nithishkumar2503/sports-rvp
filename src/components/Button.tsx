const button = ({ name, onClick }) => {
  return (
    <button
      onClick={onClick}
      id="react_button"
      className="px-[10px] py-[10px] w-[150px] bg-[var(--primary-color)] text-white m-2 
         focus:outline-none focus:border focus:border-blue-500 
         active:bg-white active:text-[var(--primary-color)] active:border active:border-blue-500"
    >
      {name ? name : "submit"}
    </button>
  );
};
export default button;
