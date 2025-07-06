import { ChildrenProps } from "../type";
import "./styles/mainLayout.css";
const MainLayout = ({ children }:ChildrenProps) => {
    return (
        <section id="mainLayout">
            {children}
        </section>
    )
}

export default MainLayout