import Email from "./icons/Email";
import Location from "./icons/Location";
import Phone from "./icons/Phone";

export default function ContactList({ data }) {
  function renderPhone(number, i) {
    return (
      <a className="contact-link" key={`numbers-${i}`} href={`tel:${number}`}>
        {number}
      </a>
    );
  }

  function renderEmail(address, i) {
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
        <div>{data.phone.map(renderPhone)}</div>
      </div>
      <div className="row-start link">
        <Email />
        <div>{data.email.map(renderEmail)}</div>
      </div>
      <div className="row-start link">
        <Location />
        <div>
          <a
            className="contact-link"
            href="/#contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>{data.location}</p>
          </a>
        </div>
      </div>
    </div>
  );
}
