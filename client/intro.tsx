import React from "react";

import "./style.css";

class HeaderCanvas {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    constructor() {
        this.canvas = document.getElementById("header_canvas") as HTMLCanvasElement;
        this.context = this.canvas.getContext("2d");
    }
}

const headerCanvas = new HeaderCanvas();

function IntroComponent() {
    return (
        <div id="intro">
            <div id="header_div">
                미 美 .
            </div>
            <canvas id="header_canvas"></canvas>
        </div>
    )
}

export default IntroComponent;