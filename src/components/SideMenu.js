import React from 'react';
import logo from '../img/logo.svg';
import {Link} from "react-router-dom";
import home from '../img/home.svg';
import workflow from '../img/workflow.svg';
import statistics from '../img/statistics.svg';
import calendar from '../img/calendar.svg';
import users from '../img/users.svg';
import settings from '../img/settings.svg';

const SideMenu = () => {
    return (
        <div className="sideMenu">
            <div className='logoBlock'>
                <img className="logo" src={logo} alt="Mercury"/>
            </div>
            <nav className="nav">
                <Link to={'/home'} className="nav-item"><img className="menuIcon" src={home} alt="Home"/>Home</Link>
                <Link to={'/workflow'} className="nav-item"><img className="menuIcon" src={workflow} alt="Workflow"/>Workflow</Link>
                <Link to={'/statistics'} className="nav-item"><img className="menuIcon" src={statistics}
                                                                   alt="Statistics"/>Statistics</Link>
                <Link to={'calendar'} className="nav-item"><img className="menuIcon" src={calendar} alt="Calendar"/>Calendar</Link>
                <Link to={'/users'} className="nav-item"><img className="menuIcon" src={users} alt="Users"/>Users</Link>
                <Link to={'/settings'} className="nav-item"><img className="menuIcon" src={settings} alt="Settings"/>Settings</Link>
            </nav>
        </div>
    );
}

export default SideMenu;