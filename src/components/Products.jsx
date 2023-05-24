import { kebabCase, startCase } from "lodash";
import { useEffect, useState } from "react";
import FlexProvider from "./global/FlexContext";
import CardCollection from "./Products-Main/CardCollection";
import Header from "./Products-Main/Header";

export default function Products() {
  const [ready, setReady] = useState(false);
  const [products, setProducts] = useState({});

  useEffect(() => {
    fetch(`${window.location.origin}/data/products.json`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setReady(true);
      });
  }, []);

  function renderCollections(key) {
    const title = startCase(key);
    const id = `coll-${kebabCase(key)}`;
    return <CardCollection title={title} products={products[key]} name={id} />;
  }
  return (
    <FlexProvider>
      <Header />
      {ready && products.index.map(renderCollections)}
    </FlexProvider>
  );
}
