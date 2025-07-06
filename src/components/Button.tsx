import "./styles/button.css"
const button = ({ name,onClick }) => {
    return (
        <button
        onClick={onClick} 
         id="react_button"
        >
            {name ? name : "submit"}
        </button>
    )
}
export default button