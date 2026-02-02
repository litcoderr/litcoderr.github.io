import React from 'react';
import { Link } from 'react-router-dom';
import matter from 'gray-matter';

import recollectingFirstYearOfGradSchoolMd from '../content/posts/recollecting-first-year-of-grad-school.md';

type Post = {
    slug: string;
    title: string;
    date?: string;
    content: string;
};

const rawPosts: { slug: string; markdown: string }[] = [
    { slug: 'recollecting-first-year-of-grad-school', markdown: recollectingFirstYearOfGradSchoolMd },
];

const posts: Post[] = rawPosts.map((p) => {
    const parsed = matter(p.markdown);
    return {
        slug: p.slug,
        title: parsed.data.title || p.slug,
        date: parsed.data.date,
        content: parsed.content,
    };
});

function PostViewer() {
    return (
        <div id="post_viewer_main">
            <div className="paragraphTitle">
                Posts
            </div>
            <div id="post_viewer_list_container">
                {posts.map((elem) => (
                    <div key={elem.slug} className="postListItem">
                        <div>
                            <Link to={`/posts/${elem.slug}`}>{elem.title}</Link>
                        </div>
                        {elem.date && <div className="postListMeta">{elem.date}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PostViewer;
export { posts };
