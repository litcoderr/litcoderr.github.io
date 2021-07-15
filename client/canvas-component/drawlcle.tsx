import React from "react";
import Updatable from "./updatable";


class Drawlcle implements Updatable{
    context: CanvasRenderingContext2D;

    constructor(context: CanvasRenderingContext2D) {
        this.context = context;
    }

    update = () => {
        console.log("hello from drawlcle")
    }
}


export default Drawlcle;