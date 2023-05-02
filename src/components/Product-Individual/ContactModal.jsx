import { contactInfo } from "../../data/home";
import ProductContact from "./ProductContact";

export default function ContactModal(props) {
  function renderPhone({ number }) {
    return (
      <a className="contact-link" href={`tel:${number}`}>
        {number}
      </a>
    );
  }

  return (
    <div className="modal">
      <ProductContact product={props.product} toggleModal={props.toggleModal} />
      <div className="modal-phone">
        <h1 className="title">Or give us a call</h1>
        {contactInfo.phone.map(renderPhone)}
      </div>
    </div>
  );
}
