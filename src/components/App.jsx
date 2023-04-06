import '../styles.css';
import Header from './home/Header';
import DarkParagraph from './home/DarkParagraph';
import LightParagraph from './home/LightParagraph';
import { aboutUs, placeholder, whySolar } from '../data/home'
import WhySolar from './home/WhySolar';
import Contact from './home/Contact';
// import BannerImage from './utils/BannerImage';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="full-page">
        <LightParagraph 
          title={aboutUs.title}
          body={aboutUs.body}
          url={aboutUs.image}
        />
        <WhySolar 
          title={whySolar.title}
          reasons={whySolar.reasons}
        />
        <DarkParagraph />
        <div className="align-right">
          <LightParagraph 
            title={placeholder.title}
            body={placeholder.body}
            url={placeholder.image}
          />
        </div>
        <Contact />
      </div>
    </div>
  );
}

export default App;
