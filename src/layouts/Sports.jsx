import './styles/sports.css'
import MenuCard from "../components/MenuCard";
import Header from "../components/Header";
import { useState } from 'react';
import { catagoryList } from '../utils/global-list';

const Sports = () => {
    const [isHead, setHead] = useState(false)
    const handleHeaderVisible = (value) => {
        setHead(value)
    }
   
    return (
        <section id="sports_container" >
            <div onMouseEnter={() => {
                handleHeaderVisible(true)
            }}
                onMouseLeave={() => {
                    handleHeaderVisible(false)
                }}
                id='sports-layout-header'>
                {isHead ? <Header /> : null}

            </div>
            <div
                id='sports-layout-main'>
                <div id='sports-layout-menu'>
                    {catagoryList.map((item) => (
                        <MenuCard props={item} />
                    ))}
                </div>

            </div>

        </section>
    );
}

export default Sports