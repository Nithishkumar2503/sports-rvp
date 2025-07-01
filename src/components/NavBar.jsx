import "./styles/navbar.css";

const navBar=({content})=>{
    return (
        <nav id='container_nav'>
            <div id="nav_container">
            {content}
            </div>
        </nav>
    )
}

export default navBar