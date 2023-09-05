import { kebabCase, startCase } from "lodash";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import FlexProvider from "./global/FlexContext";
import Footer from "./global/Footer";
import CardCollection from "./Products-Main/CardCollection";
import Header from "./Products-Main/Header";

export default function Products() {
  const [ready, setReady] = useState(false);
  const [products, setProducts] = useState({});
  const [metaDesc, setMetaDesc] = useState("");
  const [homeReady, setHomeReady] = useState(false);
  const [keywords, setKeywords] = useState("");
  const [contact, setContact] = useState({});

  useEffect(() => {
    fetch(`${window.location.origin}/data/home.json`, { cache: "no-cache" })
      .then((response) => response.json())
      .then((data) => {
        const keyString = data.tags.toString();
        setKeywords(keyString);
        setContact(data.contactInfo);
        setMetaDesc(data.metaDescription);
        setHomeReady(true);
      });
  }, []);

  useEffect(() => {
    fetch(`${window.location.origin}/data/products.json`, { cache: "no-cache" })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setReady(true);
      });
  }, []);

  function renderCollections(key, i) {
    const title = startCase(key);
    const id = `coll-${kebabCase(key)}`;
    return (
      <CardCollection
        key={i}
        title={title}
        products={products[key]}
        name={id}
      />
    );
  }
  return (
    <FlexProvider>
      {homeReady && (
        <Helmet>
          <meta name="description" content={metaDesc} />
          <meta name="keywords" content={keywords} />
        </Helmet>
      )}
      {homeReady && <Header contact={contact} />}
      {ready && products.index.map(renderCollections)}
      {homeReady && <Footer contact={contact} />}
    </FlexProvider>
  );
}
