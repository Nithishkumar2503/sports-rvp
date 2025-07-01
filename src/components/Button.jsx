import "./styles/button.css"
const button = ({ name }) => {
    return (
        <button id="react_button"
        >
            {name ? name : "submit"}
        </button>
    )
}
export default button