import '../styles.css';
import Header from './home/Header';
import DarkParagraph from './home/DarkParagraph';
import LightParagraph from './home/LightParagraph';
import { aboutUs, placeholder, whySolar } from '../data/home'
import WhySolar from './home/WhySolar';
import Contact from './home/Contact';
import BackToTop from './global/BackToTop';
import FlexProvider from './global/FlexContext';
// import BannerImage from './utils/BannerImage';

function Home() {
  return (
    <FlexProvider>
      <BackToTop />
      <Header />
      <div className="full-page">
        <div id="about">
          <LightParagraph 
            title={aboutUs.title}
            body={aboutUs.body}
            url={aboutUs.image}
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
            title={placeholder.title}
            body={placeholder.body}
            url={placeholder.image}
          />
        </div>
        <Contact />
      </div>
    </FlexProvider>
  );
}

export default Home;
