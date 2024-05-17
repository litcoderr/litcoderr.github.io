import React from "react";

type ParagraphProps = {
    title: string,
    content: string,
    children: React.ReactNode
};

function Paragraph(props: ParagraphProps) {
    return (
        <div className="paragraph">
            <div className="paragraphTitle">
                {props.title}
            </div>
            <div className="paragraphContent">
                {props.content}
                {props.children}
            </div>
        </div>
    );
}


export default Paragraph;