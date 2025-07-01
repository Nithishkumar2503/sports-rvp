import "./styles/menuCard.css";
const menuCard=({props})=>{
    const {link,title,description,key}=props
    return (
        <a  href={"/"+link} id="menu-card">
            <h1 id="menu-title" >{title}</h1>
            <h2 id="menu-title" >{description}</h2>
        </a>
    )
}
export default menuCard