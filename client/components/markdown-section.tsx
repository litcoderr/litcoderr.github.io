import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Props = {
    title: string;
    markdown: string;
};

function MarkdownSection({ title, markdown }: Props) {
    return (
        <section className="paragraph">
            <div className="paragraphTitle">{title}</div>
            <div className="markdownBody">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {markdown}
                </ReactMarkdown>
            </div>
        </section>
    );
}

export default MarkdownSection;
