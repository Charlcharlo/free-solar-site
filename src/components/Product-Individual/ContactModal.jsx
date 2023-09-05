import ProductContact from "./ProductContact";

export default function ContactModal(props) {
  function renderPhone(number, i) {
    return (
      <a className="contact-link" href={`tel:${number}`} key={i}>
        {number}
      </a>
    );
  }

  return (
    <dialog className="modal" id="contact-modal">
      <ProductContact
        product={props.product}
        toggleModal={props.toggleModal}
        ready={props.ready}
        numbers={props.numbers}
      />
      {props.ready && (
        <div className="modal-phone">
          <h1 className="title">Or give us a call</h1>
          {props.numbers.map(renderPhone)}
        </div>
      )}
    </dialog>
  );
}
