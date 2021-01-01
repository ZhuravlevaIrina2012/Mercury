import React from "react";
import ActivitiesList from "./ActivitiesList";

const Activities = () => {
    return (
        <div className='block activities'>
            <div className='smallHeader'>
                <h3>Activity</h3>
                <div className='circles'>
                    <div className='blueCircle'>10</div>
                </div>
            </div>
            <ActivitiesList/>
        </div>
    );
}

export default Activities;