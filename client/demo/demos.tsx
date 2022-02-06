import React from 'react';
import Hangul from "./rhythm_of_hangul/hangul";
import {Link} from "react-router-dom";

const demo_urls = [
    {
        title: "Feel the Rhythm of Hangul",
        url: "/demos/rhythm_of_hangul",
        comp: Hangul
    },
];

function DemoViewer() {
    return (
        <div id="post_viewer_main">
            <div className="paragraphTitle">
                Demos
            </div>
            <div id="post_viewer_list_container">
            {
                demo_urls.map(elem=>{
                    return (<Link to={elem.url} key={"link_"+elem.url}>{elem.title}</Link>)
                })
            }
            </div>
        </div>
    );
}

export default DemoViewer;
export {demo_urls};