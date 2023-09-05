import { kebabCase } from "lodash";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import TemplateChapters from "./TemplateChapters";

export default function ArticleSetter() {
  const [ready, setReady] = useState(false);
  const [page, setPage] = useState({});
  const { name } = useParams();

  useEffect(() => {
    fetch(`${window.location.origin}/data/articles.json`, { cache: "no-cache" })
      .then((response) => response.json())
      .then((data) => {
        const currentPage = data.articles.find(
          (item) => kebabCase(item.name) === name
        );
        setPage(currentPage);
        setReady(true);
      });
  }, [name]);

  return ready && <TemplateChapters info={page} />;
}
