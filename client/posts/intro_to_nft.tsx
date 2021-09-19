import React from 'react';
import PostPage from '../components/post';
import "../style.css";

function Content() {
    return (
        <div>
            Content. Yadayadayada
        </div>
    )
}

function IntroToNft() {
    return (
        <PostPage title="Intro to Non-Fungible Tokens" content={Content}/>
    )
}

export default IntroToNft;