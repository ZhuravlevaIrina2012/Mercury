import React from 'react';
import {FiMoreVertical} from "react-icons/fi";
import {BsClock} from "react-icons/bs";

const Task = props => {

    const getDays = () => {
        if (props.task.daysDelays > 0) {
            return (
                <div className='days row'>
                    <BsClock size='14px' color='#f83c7b'/>
                    <p className='delay'>{props.task.daysDelays} days delays</p>
                </div>
            );
        }
        if (props.task.daysLeft > 0) {
            return (
                <div className='days row'>
                    <BsClock size='14px' color='#8492af'/>
                    <p className='left'>{props.task.daysLeft} days left</p>
                </div>
            );
        }
    }

    return (
        <div className='task'>
            <div className='row leftPart'>
                <div className='label'>{props.task.header[0]}</div>
                <div className='info'>
                    <h4>{props.task.header}</h4>
                    {getDays()}
                </div>
            </div>
            <div className='more row'>
                <FiMoreVertical size='33px' color='#8492af'/>
            </div>
        </div>
    );
};

export default Task;