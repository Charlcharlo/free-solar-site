import { contactInfo } from "../../data/home"
import Email from "./icons/Email"
import Location from "./icons/Location"
import Phone from "./icons/Phone"

export default function ContactList() {

    function renderPhone({number}) {
        return (
            <a href={`tel:${number}`}>{number}</a>
        )
    }

    function renderEmail({address}) {
        return (
            <a href={`mailto:${address}`}>{address}</a>
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
                            {contactInfo.location.text.map((line) => {
                                return (
                                    <span>
                                        {line}
                                        <br />
                                    </span>
                                )
                            })}
                        </a>
                        <img 
                            className="map-img"
                            src="./images/map.png"
                            alt=""
                        />
                    </div>
                </div>
        </div>
    )
}