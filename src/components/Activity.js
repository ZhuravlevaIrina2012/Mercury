import React from 'react';
import {BsClock} from "react-icons/bs";

const Activity = props => {
    return (
        <div className='activity'>
            <img className='label' src={props.activity.img} alt='user'/>
            <div className='info'>
                <div className='row'>
                    <p className='name'>{props.activity.name}</p>
                    <p className='left'>{props.activity.action}</p>
                    <p className='name'>{props.activity.title}</p>
                </div>
                <div className='days row'>
                    <BsClock size='14px' color='#8492af'/>
                    <p className='left'>{props.activity.time}</p>
                </div>
            </div>
        </div>
    );
}

export default Activity;