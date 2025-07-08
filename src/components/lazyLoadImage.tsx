import "./lazyLoadImage.css";
const lazyLoadImage = ({ image }) => {
  return (
    <>
      <img
        className="w-full h-full object-contain rounded-[var(--radius)] block transition-opacity duration-[2000ms] ease-in-out"
        id=""
        src={image}
        alt=""
      />
    </>
  );
};
export default lazyLoadImage;
