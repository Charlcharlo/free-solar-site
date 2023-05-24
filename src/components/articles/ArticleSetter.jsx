import { useEffect, useState } from "react";
import { useParams } from "react-router";
import TemplateChapters from "./TemplateChapters";

export default function ArticleSetter() {
  const [ready, setReady] = useState(false);
  const [page, setPage] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`${window.location.origin}/data/articles.json`)
      .then((response) => response.json())
      .then((data) => {
        const currentPage = data.articles.find((item) => item.id === id);
        setPage(currentPage);
        setReady(true);
      });
  }, [id]);

  return ready && <TemplateChapters info={page} />;
}
