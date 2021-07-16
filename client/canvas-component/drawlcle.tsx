import React from "react";
import Updatable from "./updatable";


class Drawlcle implements Updatable{
    width: number;
    height: number;
    dx: number;
    dy: number;
    context: CanvasRenderingContext2D;
    imageData: ImageData;

    constructor(context: CanvasRenderingContext2D,
                width: number,
                height: number,
                dx: number,
                dy: number) {
        this.context = context;
        this.width = width;
        this.height = height;
        this.dx = dx;
        this.dy = dy;
    }

    update = () => {
        // TODO fix pixel bug
        let converted_width = (this.width / window.innerWidth) * 500;
        let converted_height = (this.height / window.innerHeight) * 500;
        this.imageData = this.context.createImageData(converted_width, converted_height);
        for(let idx=0; idx<this.imageData.data.length; idx++) {
            this.imageData.data[idx] = 100;
        }
        // TODO Draw appropriate drawlcle
        this.context.putImageData(this.imageData, this.dx, this.dy);
    }
}


export default Drawlcle;