import { contactInfo } from "../../data/home"
import Email from "./icons/Email"
import Location from "./icons/Location"
import Phone from "./icons/Phone"

export default function ContactList() {

    function renderPhone({number}, i) {
        return (
            <a key={`numbers-${i}`} href={`tel:${number}`}>{number}</a>
        )
    }

    function renderEmail({address}, i) {
        return (
            <a key={`emails-${i}`} href={`mailto:${address}`}>{address}</a>
        )
    }

    return (
        <div className="" id="contact-list">
                <h1 className="title">Get in touch</h1>
                <div className="row-start link">
                    <Phone />
                    <div>
                        { contactInfo.phone.map(renderPhone)}
                    </div>
                </div>
                <div className="row-start link">
                    <Email />
                    <div>
                        { contactInfo.email.map(renderEmail)}
                    </div>
                </div>
                <div className="row-start link">
                    <Location />
                    <div>
                        <a 
                            href={contactInfo.location.url}
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            {contactInfo.location.text.map((line, i) => {
                                return (
                                    <span key={`location-line-${i}`}>
                                        {line}
                                        <br />
                                    </span>
                                )
                            })}
                        </a>
                    </div>
                </div>
        </div>
    )
}