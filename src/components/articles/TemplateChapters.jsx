import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import BackToTop from "../global/BackToTop";
import FlexProvider from "../global/FlexContext";
import Footer from "../global/Footer";
import NavBar from "../global/Navbar";
import ArticleHtml from "../Product-Individual/ArticleHtml";

export default function TemplateChapters({ info }) {
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

  return (
    <FlexProvider>
      {ready && (
        <Helmet>
          <title>{info.name}</title>
          <meta
            name="description"
            content={
              info.metaDescription ? info.metaDescription : info.plainText
            }
          />
          <meta name="keywords" content={`${keywords},${tags}`} />
        </Helmet>
      )}
      <div id="article-template">
        <BackToTop start={400} />
        {ready && <NavBar contact={contact} />}
        <div className="body-block-special">
          <div className="article-page">
            <div className="article-header">
              <img
                className="header-image"
                src={`https://freesolarza.co.za/images/articles/${info.img.url}`}
                alt={info.img.title}
              />
              <div>
                <h1 className="title">{info.name}</h1>
              </div>
            </div>
            <div className="article-body">
              <ArticleHtml text={info.body} />
            </div>
          </div>
        </div>
        {ready && <Footer contact={contact} />}
      </div>
    </FlexProvider>
  );
}
