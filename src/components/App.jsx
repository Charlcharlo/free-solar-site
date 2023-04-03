import '../styles.css';
import Header from './Header';
import DarkParagraph from './utils/DarkParagraph';
import LightParagraph from './utils/LightParagraph';
// import BannerImage from './utils/BannerImage';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="full-page">
        <LightParagraph />
        <DarkParagraph />
      </div>
    </div>
  );
}

export default App;
