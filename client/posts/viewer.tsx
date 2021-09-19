import React from 'react';
import { Link } from 'react-router-dom';
import IntroToNft from './intro_to_nft';

const post_urls = [
    {
        title: "Intro to Non-Fungible Tokens",
        url: "/posts/intro_to_nft",
        comp: IntroToNft
    }
] 

function PostViewer() {
    return (
        <div id="post_viewer_main">
            <div className="paragraphTitle">
                Posts
            </div>
            <div id="post_viewer_list_container">
            {
                post_urls.map(elem=>{
                    return (<Link to={elem.url}>{elem.title}</Link>)
                })
            }
            </div>
        </div>
    )
}

export default PostViewer;
export {post_urls};