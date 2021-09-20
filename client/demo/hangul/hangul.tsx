import { createWriteStream } from 'fs';
import React, { useEffect } from 'react';
import logger from '../../util/logger';

class HangulSampler {
    context: CanvasRenderingContext2D;

    c: String;
    /**
     * imData.data is a one-dimensional array each ranging from 0 and 255 (inclusive)
     * (0,0,0), (0,0,1), (0,0,2), (0,0,3), (1,0,0) ... order
     * rgb -> x(width) -> y(height) incremental order
     */
    imData: ImageData;

    constructor(context: CanvasRenderingContext2D) {
        this.context = context;
    }

    sample(c: string) {
        if(this.c !== c) {
            this.c = c;

            this.context.clearRect(0, 0, 100, 100);
            this.context.fillStyle = 'black';
            this.context.font = '30px Verdana';
            this.context.fillText(c, 0, 30);
            this.imData = this.context.getImageData(0, 0, 100, 100);
            this.context.clearRect(0, 0, 100, 100);
        }
    }
}

class Animator {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    sampler: HangulSampler;

    constructor() {
        logger.info("Initializing Animator");

        this.canvas = document.getElementById("hangul_canvas") as HTMLCanvasElement;
        this.context = this.canvas.getContext("2d");
        this.sampler = new HangulSampler(this.context);
        this.resize();

        window.addEventListener('resize', this.resize);

        logger.info("Starting Animation");
        window.requestAnimationFrame(this.draw);
    }

    resize = () => {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    draw = () => {
        this.sampler.sample('한');

        // TODO start drawing particles using sampled character

        window.requestAnimationFrame(this.draw);
    }
}

function Hangul() {
    document.title = "Rythm of Hangul";

    useEffect(()=>{
        const animator = new Animator();
    });

    return (
        <div>
            <canvas id="hangul_canvas"></canvas>
        </div>
    )
}

export default Hangul;