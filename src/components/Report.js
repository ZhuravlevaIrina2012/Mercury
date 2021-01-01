import React from 'react';
import statistic from "../img/Graph.png";

const Report = () => {
    return (
        <div className='block report'>
            <header>
                <h2>Report</h2>
                <div className='period'>
                    <label htmlFor='year'>Period: </label>
                    <select name='year' id='year'>
                        <option value='Last Year'>Last Year</option>
                    </select>
                </div>
            </header>
            <img className='statistic' src={statistic} alt='statistics'/>
        </div>
    );
}

export default Report;