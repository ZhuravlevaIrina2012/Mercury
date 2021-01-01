import React from 'react';
import {FaBell} from "react-icons/fa";

const Notification = (props) => {
    return (
        <div className="notification">
            <div className="circle">3</div>
            <FaBell size="28px" className="bell"/>
        </div>
    )
}

export default Notification;