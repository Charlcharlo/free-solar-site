import { contactInfo } from "../../data/home";
import Email from "./icons/Email";
import Location from "./icons/Location";
import Phone from "./icons/Phone";

export default function ContactList() {
  function renderPhone({ number }, i) {
    return (
      <a className="contact-link" key={`numbers-${i}`} href={`tel:${number}`}>
        {number}
      </a>
    );
  }

  function renderEmail({ address }, i) {
    return (
      <a
        className="contact-link"
        key={`emails-${i}`}
        href={`mailto:${address}`}
      >
        {address}
      </a>
    );
  }

  return (
    <div id="contact-list">
      <h1 className="title">Get in touch if you would like to switch lanes</h1>
      <div className="row-start link">
        <Phone />
        <div>{contactInfo.phone.map(renderPhone)}</div>
      </div>
      <div className="row-start link">
        <Email />
        <div>{contactInfo.email.map(renderEmail)}</div>
      </div>
      <div className="row-start link">
        <Location />
        <div>
          <a
            className="contact-link"
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
              );
            })}
          </a>
        </div>
      </div>
    </div>
  );
}
