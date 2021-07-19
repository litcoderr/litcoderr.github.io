import React from "react";

type ParagraphProps = {
    title: string,
    content: string
};

function Paragraph(props: ParagraphProps) {
    return (
        <div className="paragraph">
            <div className="paragraphTitle">
                {props.title}
            </div>
            <div className="paragraphContent">
                {props.content}
            </div>
        </div>
    );
}


export default Paragraph;