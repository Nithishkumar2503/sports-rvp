
import "./styles/header.css";
const header = ({ child }) => {
    return (
        <div id="header_container">
            <div>
                {child}
            </div>
        </div>
    )
}

export default header
