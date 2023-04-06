import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

export default function Contact() {
    return (
        <div className="contact-section">
            <div className="fade-gray-reverse" />
            <div className="body-block">
                <div className="contact-block">
                    <h1 className="title">Get in touch</h1>
                    <div className="row-between">
                        <ContactList />
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}