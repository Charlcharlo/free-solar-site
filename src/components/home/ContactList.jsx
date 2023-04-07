import { contactLinks } from "../../data/home"
import ContactLink from "./ContactLink"

export default function ContactList() {
    function renderLinks(link) {
        return (
            <ContactLink 
                text={link.text}
                icon={link.icon}
            />
        )
    }

    return (
        <div className="" id="contact-list">
                <h1 className="title">Get in touch</h1>
            { contactLinks.map(renderLinks) }
        </div>
    )
}