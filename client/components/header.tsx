import React from "react";

type ContactComponentProps = {
    name: string,
    link: string
}

const contacts: {[key: string]: string} = {
    "github": "https://www.github.com/litcoderr",
    "email": "mailto:litcoderr@gmail.com",
    "facebook": "https://www.facebook.com/litcoderr/",
}

function Header() {
    return (
        <div id="header">
            <span className="header">James Chee</span>
            <span id="sub" className="sub">지영채</span>
            <CurrentStatus></CurrentStatus>
            <Contacts></Contacts>
        </div>
    );
}

function CurrentStatus() {
    return (
        <div id="currentStatus">
            Undergraduate Student @<br></br>
            <a href="https://www.hanyang.ac.kr/web/eng">Hanyang Tech</a> '24<br></br>
            <a href="http://cs.hanyang.ac.kr/eng">Computer Science and Engineering</a>
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