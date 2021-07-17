import React, {useEffect} from "react";

import Updatable from "./canvas-component/updatable";
import Drawlcle from "./canvas-component/drawlcle";
import "./style.css";

class HeaderCanvas implements Updatable{
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    updateBuffer: Array<Updatable>;

    constructor() {
        this.canvas = document.getElementById("header_canvas") as HTMLCanvasElement;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.context = this.canvas.getContext("2d");
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.updateBuffer = [];

        // add drawlcle
        this.updateBuffer.push(new Drawlcle(this.canvas, this.context, Math.min(this.canvas.width, this.canvas.height) / 3.5, this.canvas.width/2, this.canvas.height/2));
    }

    update = () => {
        this.updateBuffer.forEach(e => {
            e.update();
        });
    }
}

// TODO update headerCanvas from main loop
let headerCanvas: HeaderCanvas = null;
window.addEventListener('resize', ()=>{
    headerCanvas = new HeaderCanvas();
});

function IntroComponent() {

    useEffect(() => {
        headerCanvas = new HeaderCanvas();
    }); 

    return (
        <div id="intro">
            <canvas id="header_canvas"></canvas>
            <div id="header_div">
                미 美 <span className="highlight_lowkey">.</span>
            </div>
        </div>
    )
}

export default IntroComponent;
export {headerCanvas};