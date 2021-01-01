import React from 'react';
import {GoTriangleLeft} from "react-icons/go";
import {IoMenuSharp} from "react-icons/io5";

const Menu = (props) => {
    return (
        <div className="menu">
            <GoTriangleLeft size="11px" color="#5584ff"/>
            <div onClick={() => props.clickMenu(props.sideMenu)}><IoMenuSharp size="30px"/></div>
        </div>
    )
}

export default Menu;