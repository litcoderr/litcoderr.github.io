import React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import profileMd from "../content/profile.md";

type Contact = {
    label: string;
    url: string;
};

const parsed = matter(profileMd);
const meta = parsed.data as {
    name?: string;
    sub?: string;
    status?: string;
    contacts?: Contact[];
};

function Header() {
    return (
        <div id="headerdiv">
            <span className="header">{meta.name || "Name"}</span><br></br>
            {meta.sub && <span id="sub" className="sub">{meta.sub}</span>}
            <CurrentStatus status={meta.status || ""}></CurrentStatus>
            <Contacts contacts={meta.contacts || []}></Contacts>
        </div>
    );
}

function CurrentStatus({ status }: { status: string }) {
    if (!status) return null;
    return (
        <div id="currentStatus">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {status}
            </ReactMarkdown>
        </div>
    );
}

function Contacts({ contacts }: { contacts: Contact[] }) {
    if (!contacts || contacts.length === 0) return null;
    return (
        <div id="contacts">
            {
                contacts.map((contact) => (
                    <ContactComponents key={contact.label} name={contact.label} link={contact.url}></ContactComponents>
                ))
            }
        </div>
    );
}

function ContactComponents(props: { name: string, link: string }) {
    return (
        <span className="contactComponent">
            [<a href={props.link}>{props.name}</a>]
        </span>
    );
}

export default Header;
