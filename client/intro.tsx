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
        this.context = this.canvas.getContext("2d");
        this.updateBuffer = [];

        // add drawlcle
        this.updateBuffer.push(new Drawlcle(this.context, 20, 20, 100, 100));
    }

    update = () => {
        this.updateBuffer.forEach(e => {
            e.update();
        });
    }
}

// TODO update headerCanvas from main loop
let headerCanvas: HeaderCanvas = null;

function IntroComponent() {

    useEffect(() => {
        headerCanvas = new HeaderCanvas();
    }); 

    return (
        <div id="intro">
            <div id="header_div">
                미 美 <span className="highlight_lowkey">.</span>
            </div>
            <canvas id="header_canvas"></canvas>
        </div>
    )
}

export default IntroComponent;
export {headerCanvas};