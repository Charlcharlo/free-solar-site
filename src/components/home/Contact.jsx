import Footer from "../global/Footer";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

export default function Contact({ data }) {
  return (
    <div className="contact-section">
      <div className="fade-gray-reverse" />
      <div className="contact-block" id="contact">
        <div>
          <div className="row-between">
            <ContactList data={data} />
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer contact={data} />
    </div>
  );
}
