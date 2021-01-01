import React from "react";
import TasksList from "./TasksList";

const Tasks = () => {
    return (
        <div className='block tasks'>
            <div className='smallHeader'>
                <h3>Tasks</h3>
                <div className='circles'>
                    <div className='blueCircle'>5</div>
                    <div className='pinkCircle'>2</div>
                </div>
            </div>
            <TasksList/>
        </div>
    );
}

export default Tasks;