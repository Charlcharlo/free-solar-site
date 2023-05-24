import "../styles.css";
import Header from "./home/Header";
import DarkParagraph from "./home/DarkParagraph";
import LightParagraph from "./home/LightParagraph";
import { aboutUs, incentives, whySolar } from "../data/home";
import WhySolar from "./home/WhySolar";
import Contact from "./home/Contact";
import BackToTop from "./global/BackToTop";
import FlexProvider from "./global/FlexContext";
import { useLocation } from "react-router";
import { useEffect } from "react";
// import BannerImage from './utils/BannerImage';

function Home() {
  const { hash } = useLocation();

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
  return (
    <FlexProvider>
      <BackToTop start={800} />
      <Header />
      <div className="full-page">
        <div id="about">
          <LightParagraph
            title={aboutUs.title}
            body={aboutUs.body}
            image={aboutUs.image}
            url={aboutUs.url}
            newTab={aboutUs.newTab}
            linkText={aboutUs.linkText}
          />
        </div>
        <WhySolar title={whySolar.title} reasons={whySolar.reasons} />
        <div id="options">
          <DarkParagraph />
        </div>
        <div className="align-right" id="rebates">
          <LightParagraph
            title={incentives.title}
            body={incentives.body}
            image={incentives.image}
            url={incentives.url}
            newTab={incentives.newTab}
            linkText={incentives.linkText}
          />
        </div>
        <Contact />
      </div>
    </FlexProvider>
  );
}

export default Home;
