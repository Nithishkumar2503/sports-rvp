
import "./styles/header.css";
const header = ({ child }) => {
    return (
        <div onScroll={(event) => {
            console.log("event : ", event)
        }} id="header_container">
            <div>
                {child}
            </div>
        </div>
    )
}

export default header
