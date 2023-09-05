import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Header from "./articles/Header";
import PreviewChapters from "./articles/PreviewChapters";
import BackToTop from "./global/BackToTop";
import FlexProvider from "./global/FlexContext";
import Footer from "./global/Footer";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [ready, setReady] = useState(false);
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
    fetch(`${window.location.origin}/data/articles.json`, { cache: "no-cache" })
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
        {homeReady && (
          <Helmet>
            <meta name="description" content={metaDesc} />
            <meta name="keywords" content={keywords} />
          </Helmet>
        )}
        {homeReady && (
          <Header
            contact={contact}
            title="Technical Articles"
            image="panel-hat.jpg"
          />
        )}
        <BackToTop start={400} />
        <div className="body-block-special">{articles.map(renderPreview)}</div>
        {homeReady && <Footer contact={contact} />}
      </div>
    </FlexProvider>
  );
}
