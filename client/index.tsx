import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Divider from "./components/divider";
import Header from "./components/header";
import Paragraph from "./components/paragraph";
import ProfilePic from "./components/profilepic";

import "./style.css";

// set up dynamic vh for mobile viewports
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

type MainProps = {
}

function MainComponent(props: MainProps) {

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
                    Computer has been a fascinating subject for me being one of the most pratical and rapidly developing field.
                    Recently, for the past 2-3 years, Artificial Intelligence has been my area of interest hence participated
                    as an intern in various research projects from enterprise lab(NAVER CLOVA AI LAB) to university lab(SNU BI LAB).
                    I am currently mostly interested in how real-life data are correlated and how their correlations can be reasoned through machine learning models.
                    I am always available for good insights and learning materials so reach out to me anytime via email, facebook dms."
            ></Paragraph>
        </div>
    )
}

ReactDOM.render(<MainComponent></MainComponent>, document.getElementById('root'));
