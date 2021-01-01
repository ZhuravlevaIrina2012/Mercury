import React from 'react';
import Activity from "./Activity";
import {activities} from "../utils/Costants";

const ActivitiesList = () => {
    return (
        <div className='activitiesList'>
            <section>
                {activities.map((item, index) => <Activity activity={item} key={index}/>)}
            </section>
        </div>
    );
}

export default ActivitiesList;