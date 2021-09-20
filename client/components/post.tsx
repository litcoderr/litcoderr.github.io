import React from 'react';
import { Link } from 'react-router-dom';

type PostProps = {
    title: string;
    content: ()=>JSX.Element;
}

function PostPage(props: PostProps) {
    return (
        <div id="main">
            <div className="postHeader">
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div className="header">
                    {props.title}
                </div>
            </div>
            <props.content></props.content>
        </div>
    )
}

export default PostPage;