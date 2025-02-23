import React from "react";

type ContactComponentProps = {
    name: string,
    link: string
}

const contacts: {[key: string]: string} = {
    "github": "https://www.github.com/litcoderr",
    "email": "mailto:litcoderr@gmail.com",
}

function Header() {
    return (
        <div id="headerdiv">
            <span className="header">Youngchae (James) Chee</span><br></br>
            <span id="sub" className="sub">지영채</span>
            <CurrentStatus></CurrentStatus>
            <Contacts></Contacts>
        </div>
    );
}

function CurrentStatus() {
    return (
        <div id="currentStatus">
            Masters Candidate<b>@</b><br></br>
            <a href="https://www.kaist.ac.kr/kr/">KAIST</a> '24<br></br>
            <a href="https://ee.kaist.ac.kr/">Electrical Engineering</a>
        </div>
    );
}

function Contacts() {
    return (
        <div id="contacts">
            {
                Object.keys(contacts).map((key: string, index: number)=> {
                    return (
                        <ContactComponents key={key} name={key} link={contacts[key]}></ContactComponents>
                    )
                })
            }
        </div>
    );
}

function ContactComponents(props: ContactComponentProps) {
    return (
        <span className="contactComponent">
            [<a href={props.link}>{props.name}</a>]
        </span>
    );
}

export default Header;
