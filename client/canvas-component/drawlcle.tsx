import React from "react";
import Updatable from "./updatable";


class Drawlcle implements Updatable{
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    avg_radius: number;
    thickness: number;
    x_center: number;
    y_center: number;
    cur_rad: number;
    d_rad: number;

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
        this.thickness = 5;
        this.x_center = x_center;
        this.y_center = y_center;
        this.cur_rad = this.to_rad(0);
        this.d_rad = this.to_rad(1);
        
        this.last_updated = 0;
        this.interval = 1 / 60;


        this.draw_circular_sector(this.to_rad(10), this.to_rad(30), 1000, 5);
    }

    draw_circular_sector = (theta: number,
                            d_theta: number,
                            radius: number,
                            d_radius: number) => {
        let radius_short = radius - d_radius;

        this.context.beginPath();
        this.context.arc(this.x_center,
                         this.y_center,
                         radius,
                         theta,
                         theta+d_theta);
        this.context.lineTo(radius_short * Math.cos(theta+d_theta) + this.x_center, radius_short * Math.sin(theta+d_theta) + this.y_center);
        this.context.arc(this.x_center,
                         this.y_center,
                         radius_short,
                         theta+d_theta,
                         theta,
                         true);
        this.context.lineTo(radius * Math.cos(theta) + this.x_center, radius * Math.sin(theta) + this.y_center);
        this.context.fill();
    }

    update = () => {
        let cur_time = new Date().getTime() / 1000;
        let delta_time = cur_time - this.last_updated;

        if(delta_time >= this.interval) {
            //this.draw_circular_sector(this.cur_rad, this.d_rad, this.avg_radius, this.thickness);
            this.cur_rad += this.d_rad;

            this.last_updated = cur_time;
        }
    }

    to_rad = (angle: number) => {
        return (angle / 180) * Math.PI;
    }
}


export default Drawlcle;