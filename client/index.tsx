import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Link, Route } from "react-router-dom";
import Divider from "./components/divider";
import Header from "./components/header";
import Paragraph from "./components/paragraph";
import ProfilePic from "./components/profilepic";
import PostViewer, {post_urls} from "./posts/viewer";
import DemoViewer, {demo_urls} from "./demo/demos";

import "./style.css";

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
    document.title = "bio";
    return (
        <div id="main">
            <div className="flexContainer" id="headerFlex">
                <Header></Header>
                <ProfilePic></ProfilePic>
            </div>
            <Divider></Divider>
            <Paragraph
            title="Bio"
            content="I am an undergraduate student at Hanyang University where I major in computer science & engineering.
                    For the past few years, Artificial Intelligence has been my area of interest hence participated as an intern
                    at various research teams from enterprise lab(NAVER CLOVA AI LAB) to university lab(SNU BI LAB).
                    The ultimate goal is to contribute to a machine learning project that can potentially make a positive impact on its users.
                    I am always available for good insights and learning materials so reach out to me anytime via email and facebook dms."
            ></Paragraph>
            <Divider></Divider>
            <DemoViewer></DemoViewer>
            <Divider></Divider>
            <PostViewer></PostViewer>
        </div>
    )
}

ReactDOM.render(<App></App>, document.getElementById('root'));
