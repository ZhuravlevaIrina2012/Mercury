import React from 'react';
import TopMenu from "../containers/StateContainer";
import Home from "./Home";

const Main = () => {
    return (
        <div className="main">
            <TopMenu/>
            <h1>Hello John!</h1>
            <Home/>
        </div>
    )
}

export default Main;