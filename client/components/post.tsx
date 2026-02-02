import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type PostProps = {
    title: string;
    markdown: string;
    date?: string;
};

function PostPage(props: PostProps) {
    return (
        <div id="main" className="postPage">
            <div className="postHeader">
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div className="header">
                    {props.title}
                </div>
                {props.date && <div className="postMeta">{props.date}</div>}
            </div>
            <div className="markdownBody">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {props.markdown}
                </ReactMarkdown>
            </div>
        </div>
    );
}

export default PostPage;
