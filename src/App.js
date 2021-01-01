import React from 'react';
import './App.css';
import SideMenu from "./components/SideMenu";
import Main from "./components/Main";

const App = props => {
    if (!props.sideMenu) {
        return (
            <div className='app'>
                <div className='row'>
                    <SideMenu className='sideMenu col-2'/>
                    <Main className='openMenu col-10'/>
                </div>
            </div>
        );
    } else {
        return (
            <div className='app'>
                <div className='row'>
                    <Main className='fullScreen col-12'/>
                </div>
            </div>
        );
    }
}

export default App;
