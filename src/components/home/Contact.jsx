import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

export default function Contact() {
    return (
        <div className="contact-section">
            <div className="fade-gray-reverse" />
            <div className="contact-block">
                <div>
                    <div className="row-between">
                        <ContactList />
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}