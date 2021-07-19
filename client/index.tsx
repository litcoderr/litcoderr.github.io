import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";

import "./style.css";

// set up dynamic vh for mobile viewports
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

type MainProps = {
}

function MainComponent(props: MainProps) {

    return (
        <div id="main">
            <Header></Header>
        </div>
    )
}

ReactDOM.render(<MainComponent></MainComponent>, document.getElementById('root'));
