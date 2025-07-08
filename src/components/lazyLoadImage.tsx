import "./lazyLoadImage.css";
const lazyLoadImage = ({ image }) => {
    
    return (
        <>
            <img className="lazy-load-image" id="" src={image} alt="" />
        </>
    )
}
export default lazyLoadImage