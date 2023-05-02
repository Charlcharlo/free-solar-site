import '../styles.css';
import Header from './home/Header';
import DarkParagraph from './home/DarkParagraph';
import LightParagraph from './home/LightParagraph';
import { aboutUs, incentives, whySolar } from '../data/home'
import WhySolar from './home/WhySolar';
import Contact from './home/Contact';
import BackToTop from './global/BackToTop';
import FlexProvider from './global/FlexContext';
// import BannerImage from './utils/BannerImage';

function Home() {
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
        <WhySolar 
          title={whySolar.title}
          reasons={whySolar.reasons}
        />
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
