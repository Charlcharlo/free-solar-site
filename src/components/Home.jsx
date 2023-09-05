import "../styles.css";
import Header from "./home/Header";
import DarkParagraph from "./home/DarkParagraph";
import LightParagraph from "./home/LightParagraph";
import { whySolar } from "../data/home";
import WhySolar from "./home/WhySolar";
import Contact from "./home/Contact";
import BackToTop from "./global/BackToTop";
import FlexProvider from "./global/FlexContext";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

function Home() {
  const [ready, setReady] = useState(false);
  const [data, setData] = useState({});
  const { hash } = useLocation();
  const [keywords, setKeywords] = useState("");

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === "") {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [hash]);

  useEffect(() => {
    fetch(`${window.location.origin}/data/home.json`, { cache: "no-cache" })
      .then((response) => response.json())
      .then((data) => {
        const keyString = data.tags.toString();
        setKeywords(keyString);
        setData(data);
        setReady(true);
        console.log(data);
      });
  }, []);

  return (
    <FlexProvider>
      <Helmet>
        <meta name="description" content={data.metaDescription} />
        <meta name="keywords" content={keywords} />
      </Helmet>
      <BackToTop start={800} />
      {ready ? (
        <div className="full-page">
          <Header data={data.splash} contact={data.contactInfo} />
          <div id="about">
            <LightParagraph
              title={data.paraOne.title}
              body={data.paraOne.body}
              image={data.paraOne.image}
              url={data.paraOne.url}
              newTab={data.paraOne.newTab}
              linkText={data.paraOne.linkText}
            />
          </div>
          <WhySolar title={whySolar.title} reasons={whySolar.reasons} />
          <div id="options">
            <DarkParagraph data={data.darkBlock} />
          </div>
          <div className="align-right" id="rebates">
            <LightParagraph
              title={data.paraTwo.title}
              body={data.paraTwo.body}
              image={data.paraTwo.image}
              url={data.paraTwo.url}
              newTab={data.paraTwo.newTab}
              linkText={data.paraTwo.linkText}
            />
          </div>
          <Contact data={data.contactInfo} />
        </div>
      ) : (
        <div></div>
      )}
    </FlexProvider>
  );
}

export default Home;
