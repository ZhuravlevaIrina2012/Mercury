import React from 'react';
import sales from "../img/Chart.png";

const Sales = () => {
    return (
        <div className='block sales'>
            <header>
                <h2>Your Sales</h2>
                <div className='period'>
                    <label htmlFor='year'>Period: </label>
                    <select name='year' id='year'>
                        <option value='Last Year'>Last Year</option>
                    </select>
                </div>
            </header>
            <img className='chart' src={sales} alt='sales'/>
        </div>
    );
}

export default Sales;