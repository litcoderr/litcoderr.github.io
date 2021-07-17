import React from "react";
import Updatable from "./updatable";


class Drawlcle implements Updatable{
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    avg_radius: number;
    thickness: number;
    x_center: number;
    y_center: number;
    init_rad: number;
    cur_rad: number;
    d_rad: number;
    radius_rad: number;
    d_radius_rad: number;

    last_updated: number;
    interval: number;

    constructor(canvas: HTMLCanvasElement,
                context: CanvasRenderingContext2D,
                avg_radius: number,
                x_center: number,
                y_center: number) {
        this.canvas = canvas;
        this.context = context;
        this.avg_radius = avg_radius;
        this.thickness = 3;
        this.x_center = x_center;
        this.y_center = y_center;
        this.init_rad = Math.PI * Math.random();
        this.cur_rad = this.init_rad;
        this.d_rad = this.to_rad(1);
        this.radius_rad = Math.PI * Math.random();
        this.d_radius_rad = 0.01;
        
        this.last_updated = 0;
        this.interval = 1 / 60;

        this.context.lineWidth = this.thickness;
        this.context.strokeStyle = "#e32227";
        this.context.beginPath();
    }

    draw_circular_sector = (theta: number,
                            d_theta: number,
                            radius: number) => {
        this.context.moveTo(radius * Math.cos(theta) + this.x_center, radius * Math.sin(theta) + this.y_center);
        // TODO draw arc instead of line
        this.context.arc(this.x_center, this.y_center, radius, theta, theta+d_theta);
        this.context.stroke();
    }

    update = () => {
        let cur_time = new Date().getTime() / 1000;
        let delta_time = cur_time - this.last_updated;

        if(this.cur_rad - this.init_rad < Math.PI * 4.5) {
            if(delta_time >= this.interval) {
                let delta_rad = this.cur_rad - this.init_rad;
                //TODO change merge speed
                let speed_phase = delta_rad / (9);
                let speed_factor = 40;
                let speed = speed_factor * Math.cos(speed_phase);
                for(let i=0; i<speed; i++) {
                    // TODO change thickness
                    if(delta_rad < Math.PI * (3/2)) {
                        let rad_offset = delta_rad - Math.PI/2
                        this.context.lineWidth = this.thickness * (1+Math.sin(rad_offset));
                    }else {
                        this.context.lineWidth = this.thickness;
                    }
                    let cur_radius = this.avg_radius * (1+0.05 * Math.sin(this.radius_rad));

                    this.draw_circular_sector(this.cur_rad, this.d_rad, cur_radius);
                    this.cur_rad += this.d_rad;
                    this.radius_rad += this.d_radius_rad;
                }

                this.last_updated = cur_time;
            }
        }
    }

    to_rad = (angle: number) => {
        return (angle / 180) * Math.PI;
    }
}


export default Drawlcle;