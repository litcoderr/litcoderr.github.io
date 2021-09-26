import { SSL_OP_EPHEMERAL_RSA } from 'constants';
import { createWriteStream } from 'fs';
import React, { useEffect, useState } from 'react';
import logger from '../../util/logger';
import meta from './meta.json';

class HangulSampler {
    context: CanvasRenderingContext2D;

    c: String;
    /**
     * imData.data is a one-dimensional array each ranging from 0 and 255 (inclusive)
     * (0,0,0), (0,0,1), (0,0,2), (0,0,3), (1,0,0) ... order
     * rgb -> x(width) -> y(height) incremental order
     */
    width: number;
    height: number;
    data: boolean[];

    constructor(context: CanvasRenderingContext2D) {
        this.context = context;
        this.width = 300;
        this.height = 300;
    }

    sample = async (c: string) => {
        if(this.c !== c) {
            this.c = c;
            this.data = [];

            this.context.clearRect(0, 0, this.width, this.height);

            let imData: ImageData;
            this.context.fillStyle = 'black';
            this.context.font = '30px sans-serif';
            this.context.fillText(c, 0, 30);
            imData = this.context.getImageData(0, 0, this.width, this.height);
            this.context.clearRect(0, 0, this.width, this.height);

            // sample from imData
            for(let i=0;i<this.width*this.height;i++) {
                let is_black = false;
                for(let rgb_i=0;rgb_i<4;rgb_i++) {
                    if(imData.data[4*i + rgb_i]!=0) {
                        is_black = true;
                        break;
                    }
                }
                this.data.push(is_black);
            }
        }
    }

    /**
     * 
     * @param c character to get coordinate of
     * @returns coordinate of the character ranging from 0 and 1
     */
    get_coord = (c: string):{arr: {x: number, y: number}[], width:number, height:number} => {
        this.sample(c);

        let coord:{arr: {x: number, y: number}[], width:number, height:number} = {
            arr: [],
            width: 0,
            height: 0
        }
        let max_x = 0;
        let max_y = 0;
        let min_x = 987654321;
        let min_y = 987654321;
        for(let i=0;i<this.data.length;i++) {
            if(this.data[i]) { // is black
                let x = i % this.width;
                let y = Math.floor(i / this.width);

                max_x = Math.max(max_x, x);
                max_y = Math.max(max_y, y);
                min_x = Math.min(min_x, x);
                min_y = Math.min(min_y, y);

                coord.arr.push({
                    x: x,
                    y: y
                });
            }
        }

        let max_len = Math.max(max_x-min_x, max_y-min_y);
        coord.width = (max_x-min_x) / max_len;
        coord.height = (max_y-min_y) / max_len;

        // normalize
        for(let i=0;i<coord.arr.length;i++) {
            coord.arr[i].x -= min_x;
            coord.arr[i].y -= min_y;

            coord.arr[i].x /= max_len;
            coord.arr[i].y /= max_len;
        }

        return coord;
    }
}

abstract class Updater {
    p: Particle;
    last_updated: Date;

    constructor(p: Particle) {
        this.p = p;
        this.last_updated = new Date();
    }

    abstract update(): any;
}

class Blinker extends Updater {
    interval: number;

    constructor(p: Particle) {
        super(p);
        this.interval = 500;
    }

    update = () => {
        let cur_time = new Date();
        let delta = cur_time.getTime() - this.last_updated.getTime();

        if(delta >= this.interval) {
            this.last_updated = cur_time;

            this.p.shuffle_color();
        }
    }
}

class Particle {
    context: CanvasRenderingContext2D;
    x: number;
    y: number;
    radius: number;
    color_choices: string[];
    color: string;
    subscribed: Updater[];

    constructor(context: CanvasRenderingContext2D, x: number, y: number, radius: number) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color_choices = [
            "#3C4760",
            "#D5B150",
            "#B33637",
            "#1C7A77"
        ];
        this.shuffle_color();
        this.subscribed = [
            //new Blinker(this)
        ];
    }

    shuffle_color = () => {
        this.color = this.color_choices[Math.floor(Math.random()*this.color_choices.length)];
    }

    draw = () => {
        // update subscribed updaters
        this.subscribed.forEach((updater)=>{
            updater.update();
        });

        // draw
        this.context.strokeStyle = this.color;
        this.context.fillStyle = this.color;

        this.context.beginPath();
        this.context.moveTo(this.x + this.radius, this.y);
        this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.context.stroke();
        this.context.fill();
    }
}

class ParticleAnimator {
    context: CanvasRenderingContext2D;
    sampler: HangulSampler;
    c: string;
    parts: Particle[];

    constructor(context: CanvasRenderingContext2D) {
        this.context = context;
        this.sampler = new HangulSampler(context);
        this.parts = [];
    }

    draw_hangul = (width: number, height: number, c: string) => {
        // Update particles
        if(this.c!==c) {
            this.c = c;
            this.parts = [];
            const coord = this.sampler.get_coord(this.c);

            const mu = Math.min(width, height) * 0.5;
            const radius = (mu / devicePixelRatio) / 100;
            let x_len = mu * coord.width;
            let y_len = mu * coord.height;

            coord.arr.forEach((c)=>{
                let center_x = mu * c.x + ((width/2)-(x_len/2));
                let center_y = mu * c.y + ((height/2)-(y_len/2));
                this.parts.push(new Particle(this.context, center_x, center_y, radius));
            });
        }

        // draw particles
        this.parts.forEach((p)=>{
            p.draw();
        })
    }
}

class Animator {
    width: number;
    height: number;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    particle: ParticleAnimator;
    c: string;

    constructor() {
        logger.info("Initializing Animator");

        this.canvas = document.getElementById("hangul_canvas") as HTMLCanvasElement;
        this.context = this.canvas.getContext("2d");
        this.particle = new ParticleAnimator(this.context);
        this.resize();

        this.c = "한";

        window.addEventListener('resize', this.resize);

        logger.info("Starting Animation");
        window.requestAnimationFrame(this.draw);
    }

    resize = () => {
        this.canvas.width = window.innerWidth * devicePixelRatio;
        this.canvas.height = window.innerHeight * devicePixelRatio;
        this.context.scale(devicePixelRatio, devicePixelRatio);
        this.canvas.style.width = window.innerWidth + "px";
        this.canvas.style.height = window.innerHeight + "px";
        this.width = window.innerWidth;
        this.height = window.innerHeight;
    }

    draw = () => {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particle.draw_hangul(this.width, this.height, this.c);

        window.requestAnimationFrame(this.draw);
    }

    /**
     * Used to set character
     */
    setChar = (c: string) => {
        this.c = c;
    }
}

declare global {
    interface Window {
        YT: any;
        onYouTubeIframeAPIReady: any;
    }
}

class Player {
    player: any;
    width: number;
    height: number;
    muted: boolean;
    setMuted: React.Dispatch<React.SetStateAction<boolean>>;

    constructor(setMuted: React.Dispatch<React.SetStateAction<boolean>>) {
        // set dimension
        if(window.innerWidth > 2 * window.innerHeight) { // wider ratio screen
            this.height = 0.5 * window.innerWidth;
            this.width = window.innerWidth;
        }else {
            this.height = window.innerHeight;
            this.width = 2* window.innerHeight;
        }

        this.muted = true;
        this.setMuted = setMuted;

        if(!window.YT) {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            window.onYouTubeIframeAPIReady = this.loadVid;

            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }else {
            this.loadVid();
        }
    }

    /**
     * When YT api is ready, this method will load video
     */
    loadVid = () => {
        logger.info("loading video");

        this.player = new window.YT.Player("player", {
            height: this.height,
            width: this.width,
            videoId: '3P1CnWI62Ik',
            playerVars: {
                autoplay: 1,
                playsinline: 1,
                controls: 0,
                showinfo: 0,
                autohid: 1,
                modestbranding: 0,
                end: 88,
                playerVars: {
                    rel: 0
                }
            },
            events: {
                onReady: this.onReady,
                onStateChange: this.onChange
            }
        })

        const c = document.getElementById("player");
        const c_lay = document.getElementById("player_overlay");
        c_lay.style.height = this.height.toString() + "px";
        c_lay.style.width = this.width.toString() + "px";
        if(window.innerWidth > 2 * window.innerHeight) {
            c.style.top = (-1 * Math.floor((this.height - window.innerHeight)/2)).toString() + "px";
            c_lay.style.top = (-1 * Math.floor((this.height - window.innerHeight)/2)).toString() + "px";
        }else {
            c.style.left = (-1 * Math.floor((this.width - window.innerWidth)/2)).toString() + "px";
            c_lay.style.top = (-1 * Math.floor((this.height - window.innerHeight)/2)).toString() + "px";
        }
    }

    /**
     * Play vid when ready
     */
    onReady = (e: any) => {
        logger.info("youtube player is ready");
        this.player.mute();

        document.getElementById("hangul_canvas").addEventListener("click", this.trigger_mute)

        this.player.playVideo();
    }

    onChange = (e: any) => {
        if(e.data == 0) {
            this.player.playVideo();
        }
    }

    trigger_mute = () => {
        if(this.muted) {
            this.muted = false;
            this.player.unMute();
        }else {
            this.muted = true;
            this.player.mute();
        }
        this.setMuted(this.muted);
    }
}

let animator: Animator;
let player: Player;

let submit_hangul = () => {
    const field = document.getElementById("hangul_field") as HTMLInputElement;
    const input_char = field.value.charAt(0);
    if(input_char !== "") {
        animator.setChar(input_char);
    }
    field.value = "";
}

console.log(meta);

function Hangul() {
    document.title = "Rythm of Hangul";

    /**
     * Feel the Rythm of Korea 음악을 particle 들이 바닥에 깔려 스펙토그램을 그리다가,
     * 글자를 인식하면, 글자 모양을 만든 후, 스펙토그램을 이루며 animate 한다
     */
    const [muted, setMuted] = useState(true);
    useEffect(()=>{
        if(!animator && !player) {
            animator = new Animator();
            player = new Player(setMuted);
        }
    });

    return (
        <div id="hangul_div">
            <div id="hangul_input">
                <form id="hangul_form" onSubmit={(e)=>{
                    e.preventDefault();
                    submit_hangul();
                }}>
                    <input type="text" name="hangul" id="hangul_field" placeholder="Type a Hangul character"></input>
                    <button type="button" id="hangul_button" onClick={()=>{
                        submit_hangul();
                    }}>Render</button>
                </form>
                {muted?
                <div id="unmute_info">
                    Touch to Play
                </div>
                :<></>}
            </div>
            <canvas id="hangul_canvas"></canvas>
            <div id="player_overlay"></div>
            <div id="player"></div>
        </div>
    )
}

export default Hangul;