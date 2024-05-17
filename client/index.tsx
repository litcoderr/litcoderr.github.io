import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import Divider from "./components/divider";
import Header from "./components/header";
import Paragraph from "./components/paragraph";
import ProfilePic from "./components/profilepic";
import {post_urls} from "./posts/viewer";
import {demo_urls} from "./demo/demos";

import "./style.css";
import PublicationsViewer from "./publications/viewer";
import ExperienceViewer from "./experience/viewer";

// set up dynamic vh for mobile viewports
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

function App() {
    return (
        <HashRouter>
            <Route exact path="/" component={MainComponent}></Route>
            {
                post_urls.map(elem => {
                    return(
                        <Route path={elem.url} component={elem.comp} key={elem.url}></Route>
                    )
                })
            }
            {
                demo_urls.map(elem => {
                    return(
                        <Route path={elem.url} component={elem.comp} key={elem.url}></Route>
                    )
                })
            }
        </HashRouter>
    )
}

type MainProps = {
}

function MainComponent(props: MainProps) {
    const bannerStyle: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        zIndex: 9999, // Ensure it stays on top of other content
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: "30px",
        color: "white",
        background: "#5755FE",
    };

    document.title = "bio";
    return (
        <div id="main">
            <div style={bannerStyle}>Curriculum Vitae</div>
            <div className="flexContainer" id="headerFlex">
                <Header></Header>
                <ProfilePic></ProfilePic>
            </div>
            <Divider></Divider>
            <Paragraph title="Education" content="">
                <ul>
                    <li>[1] 2016.03-2019.02: <b>Dajeon Dongsin Science Highschool</b></li>
                    <li>[2] 2019.03-: <b>Hanyang University CSE</b> (Computer Science and Engineering)</li>
                </ul>
            </Paragraph>
            <Divider></Divider>
            <Paragraph title="Research Interest" content="
            Multi-Modal ML, Computer Vision, Signal Processing, Emboddied AI
            "> <></> </Paragraph>
            <Divider></Divider>
            <PublicationsViewer></PublicationsViewer>
            <Divider></Divider>
            <ExperienceViewer></ExperienceViewer>
        </div>
    )
}

ReactDOM.render(<App></App>, document.getElementById('root'));
