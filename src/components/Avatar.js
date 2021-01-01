import React from 'react';
import {GoTriangleDown} from "react-icons/go";
import userAvatar from '../img/profile.png';

const Avatar = () => {
    return (
        <div className="avatar">
            <img className="foto" src={userAvatar} alt='user'/>
            <GoTriangleDown size="12px" className="triangleDown"/>
        </div>
    )
}

export default Avatar;