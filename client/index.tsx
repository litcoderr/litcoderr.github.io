import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Updatable from "./canvas-component/updatable";
import IntroComponent, {headerCanvas} from "./intro";

import "./style.css";

// set up dynamic vh for mobile viewports
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// setup animation loop
const updatable: Array<Updatable> = [];
function Update() {
    updatable.forEach(e => {
        if(e!=null) {
            e.update();
        }
    });

    window.requestAnimationFrame(Update);
}

type MainProps = {
}

function MainComponent(props: MainProps) {

    useEffect(()=>{
        // start animation when all componenets are loaded
        updatable.push(headerCanvas);
        window.requestAnimationFrame(Update);
    });

    return (
        <div id="main">
            <IntroComponent></IntroComponent>
        </div>
    )
}

ReactDOM.render(<MainComponent></MainComponent>, document.getElementById('root'));
