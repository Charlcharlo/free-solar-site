import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductTemplate from "./ProductTemplate";

export default function ProductSetter() {
  const [ready, setReady] = useState(false);
  const [page, setPage] = useState({});
  const { cat, id } = useParams();

  useEffect(() => {
    fetch(`${window.location.origin}/data/products.json`)
      .then((response) => response.json())
      .then((data) => {
        const currentPage = data[cat].find((item) => item.id === id);
        setPage(currentPage);
        setReady(true);
      });
  }, [cat, id]);

  return ready && <ProductTemplate info={page} />;
}
