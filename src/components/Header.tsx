const header = ({ child }) => {
  return (
    <div
      id="header_container"
      className="bg-[rgba(155,155,155,0.15)] h-[80px] rounded-[16px] w-[95vw] mx-auto"
    >
      <div>{child}</div>
    </div>
  );
};

export default header;
