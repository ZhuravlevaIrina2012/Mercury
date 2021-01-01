import React from 'react';
import {GoPlus} from "react-icons/go";
import {BsEnvelopeFill} from "react-icons/bs";
import Notification from "./Notification";
import Avatar from "./Avatar";
import Menu from "../containers/MenuContainer";
import {IoSearchSharp} from "react-icons/io5";

const TopMenu = () => {
    return (
        <div className='topMenu'>
            <div className="leftMenu">
                <Menu/>
                <IoSearchSharp size="22px"/>
            </div>
            <div className="rightMenu">
                <button className='addProject'><GoPlus size="16px" color="#aac2ff"/>Add project</button>
                <BsEnvelopeFill size="30px"/>
                <Notification/>
                <Avatar/>
            </div>
        </div>
    )
}

export default TopMenu;