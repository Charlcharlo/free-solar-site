import { useEffect, useState } from "react";
import { articlesChapters } from "../data/articles";
import Header from "./articles/Header";
import PreviewChapters from "./articles/PreviewChapters";
import BackToTop from "./global/BackToTop";
import FlexProvider from "./global/FlexContext";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    fetch(`${window.location.origin}/data/articles.json`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setArticles(data.articles);
        setReady(true);
      });
  }, []);

  function renderPreview(info, i) {
    if (info.published && ready) {
      return <PreviewChapters key={info.id} info={info} />;
    } else return null;
  }
  return (
    <FlexProvider>
      <div id="articles-preview">
        <BackToTop start={400} />
        <Header title="Technical Articles" image="panel-hat.jpg" />
        <div className="body-block-special">{articles.map(renderPreview)}</div>
      </div>
    </FlexProvider>
  );
}
