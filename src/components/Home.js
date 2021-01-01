import React from 'react';
import Sales from "./Sales";
import Report from "./Report";
import Tasks from "./Tasks";
import Messages from "./Messages";
import Activities from "./Activities";

const Home = () => {
    return (
        <div className="home">
            <div className='row2'>
                <Sales/>
                <Report/>
            </div>
            <div className='row2'>
                <Tasks/>
                <Messages/>
                <Activities/>
            </div>
        </div>
    );
}

export default Home;