import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import FlexProvider from "../global/FlexContext";
import Footer from "../global/Footer";
import NavBar from "../global/Navbar";
import Feature from "../home/Feature";
import ArticleHtml from "./ArticleHtml";
import ContactModal from "./ContactModal";
import Terms from "./Terms";

export default function ProductTemplate({ info }) {
  const [contact, setContact] = useState([]);
  const [ready, setReady] = useState(false);
  const [keywords, setKeywords] = useState("");
  const tags = info.tags ? info.tags.toString() : "";

  useEffect(() => {
    fetch(`${window.location.origin}/data/home.json`, { cache: "no-cache" })
      .then((response) => response.json())
      .then((data) => {
        const keyString = data.tags.toString();
        setKeywords(keyString);
        setContact(data.contactInfo);
        setReady(true);
      });
  }, []);

  function openModal() {
    const modal = document.getElementById("contact-modal");
    modal.showModal();
  }

  return (
    <FlexProvider>
      {/* Meta */}
      <Helmet>
        <title>{info.name}</title>
        <meta
          name="description"
          content={info.metaDescription ? info.metaDescription : info.plainText}
        />
        <meta name="keywords" content={`${keywords},${tags}`} />
      </Helmet>

      {/* Content */}
      <div className="full-page" id="product-page">
        {ready && <NavBar contact={contact} />}
        <div className="body-block" id="product-template">
          <h1 className="title">{info.name}</h1>
          <img
            className="product-image"
            src={`${window.location.origin}/images/products/${info.img.url}`}
            alt={info.img.title}
          />
          {info.showPrice && <h2 className="price">{info.price}</h2>}
          <ArticleHtml text={info.writeUp} />
          <Feature title="Features" features={info.features} />
          <button className="btn btn-ylw" onClick={openModal}>
            Enquire About This Product
          </button>
          {info.terms && <Terms />}
          <ContactModal
            product={info.name}
            numbers={contact.phone}
            ready={ready}
          />
        </div>
      </div>
      {ready && <Footer contact={contact} />}
    </FlexProvider>
  );
}
