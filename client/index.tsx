import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import matter from "gray-matter";
import Divider from "./components/divider";
import Header from "./components/header";
import ProfilePic from "./components/profilepic";
import MarkdownSection from "./components/markdown-section";
import PostPage from "./components/post";
import PostViewer, { posts } from "./posts/viewer";

import educationMd from "./content/education.md";
import researchMd from "./content/research-interest.md";
import publicationsMd from "./content/publications.md";
import experienceMd from "./content/experience.md";
import certificatesMd from "./content/certificates.md";
import skillsMd from "./content/skills.md";
import profileMd from "./content/profile.md";

import "./style.css";

const profileMeta = matter(profileMd).data as { banner?: string };

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
                posts.map(post => {
                    return(
                        <Route
                            path={`/posts/${post.slug}`}
                            render={() => <PostPage title={post.title} markdown={post.content} date={post.date} />}
                            key={post.slug}
                        ></Route>
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
            <div style={bannerStyle}>{profileMeta.banner || "Curriculum Vitae"}</div>
            <div className="flexContainer" id="headerFlex">
                <Header></Header>
                <ProfilePic></ProfilePic>
            </div>
            <Divider></Divider>
            <MarkdownSection title="Education" markdown={educationMd} />
            <Divider></Divider>
            <MarkdownSection title="Research Interests" markdown={researchMd} />
            <Divider></Divider>
            <MarkdownSection title="Publications" markdown={publicationsMd} />
            <Divider></Divider>
            <MarkdownSection title="Experiences" markdown={experienceMd} />
            <Divider></Divider>
            <MarkdownSection title="Certificates & Language" markdown={certificatesMd} />
            <Divider></Divider>
            <MarkdownSection title="Skills" markdown={skillsMd} />
            <Divider></Divider>
            <PostViewer />
        </div>
    )
}

ReactDOM.render(<App></App>, document.getElementById('root'));
