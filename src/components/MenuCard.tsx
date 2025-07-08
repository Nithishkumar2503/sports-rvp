const menuCard = ({ props }) => {
  const { link, title, description, key } = props;
  return (
    <a
      href={"/" + link}
      id="menu-card"
      className="g-[#a24e4e] w-[200px] h-[200px] rounded-[16px] m-2 text-center content-center cursor-pointer hover:shadow-[10px_5px_5px_#5C403C]"
    >
      <h1 id="menu-title" className="text-[20px] text-white">
        {title}
      </h1>
      <h2 id="menu-title" className="text-[12px] text-[#ff1000]">
        {description}
      </h2>
    </a>
  );
};
export default menuCard;
