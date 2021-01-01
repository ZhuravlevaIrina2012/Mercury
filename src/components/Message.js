import React from 'react';
import {RiSettings5Fill} from "react-icons/ri";
import {TiArrowBack} from "react-icons/ti";

const Message = props => {
    return (
        <div className={`message ${props.message.isRead ? '' : 'isRead'}`}>
            <img className='label' src={props.message.img} alt='user'/>
            <div className='info'>
                <div className='row'>
                    <p className='name'>{props.message.name}</p>
                    <p className='left'>{props.message.timeLeft}</p>
                </div>
                <p className='textMessage'>{props.message.message}</p>
                <div className='row icon'>
                    <TiArrowBack size='20px' color='#8492af'/>
                    <RiSettings5Fill size='18px' color='#8492af'/>
                </div>
            </div>
        </div>
    );
}

export default Message;