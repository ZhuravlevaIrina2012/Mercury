import React from 'react';
import Task from "./Task";
import {tasks} from "../utils/Costants";


const TasksList = () => {
    return(
        <section>
            {tasks.map((item, index) => <Task task={item} key={index}/>)}
        </section>
    );
}

export default TasksList;