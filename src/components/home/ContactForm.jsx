export default function ContactForm() {
    return (
        <div id="contact-form">
            <label className="title" htmlFor="subject-line">Subject Line</label>
            <input className="contact-input" type="text" name="subject-line"/>
            <label className="title" htmlFor="email-address">Your Email Address</label>
            <input className="contact-input" type="email" name="email-address"/>
            <label className="title" htmlFor="email-body">Message Body</label>
            <textarea className="contact-input" name="email-body" id="" cols="30" rows="10"></textarea>
            <button className="std-btn">Send</button>
        </div>
    )
}