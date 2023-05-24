import { Modal } from "@mui/material";
import { useState } from "react";
import FlexProvider from "../global/FlexContext";
import NavBar from "../global/Navbar";
import Feature from "../home/Feature";
import ArticleHtml from "./ArticleHtml";
import ContactModal from "./ContactModal";
import Terms from "./Terms";

export default function ProductTemplate({ info }) {
  const [modalIn, setModalIn] = useState(false);

  function toggleModal() {
    setModalIn((prev) => !prev);
  }

  console.log(info);

  return (
    <FlexProvider>
      <div className="full-page" id="product-template">
        <NavBar />
        <div className="body-block">
          <h1 className="title">{info.name}</h1>
          <img
            className="product-image"
            src={`${window.location.origin}/images/products/${info.img.url}`}
            alt={info.img.title}
          />
          <ArticleHtml text={info.writeUp} />
          <Feature title="Features" features={info.features} />
          <button className="btn btn-ylw" onClick={toggleModal}>
            Enquire About This Product
          </button>
          {info.terms && <Terms />}
        </div>
        <Modal open={modalIn} onClose={toggleModal}>
          <ContactModal toggleModal={toggleModal} product={info.name} />
        </Modal>
      </div>
    </FlexProvider>
  );
}
