import { camelCase, kebabCase } from "lodash";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductTemplate from "./ProductTemplate";

export default function ProductSetter() {
  const [ready, setReady] = useState(false);
  const [page, setPage] = useState({});
  const { cat, name } = useParams();
  const camelCat = camelCase(cat);

  useEffect(() => {
    fetch(`${window.location.origin}/data/products.json`, { cache: "no-cache" })
      .then((response) => response.json())
      .then((data) => {
        const currentPage = data[camelCat].find(
          (item) => kebabCase(item.name) === name
        );
        setPage(currentPage);
        setReady(true);
      });
  }, [camelCat, name]);

  return ready && <ProductTemplate info={page} />;
}
