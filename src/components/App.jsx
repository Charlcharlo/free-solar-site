import '../styles.css';
import Header from './home/Header';
import DarkParagraph from './home/DarkParagraph';
import LightParagraph from './home/LightParagraph';
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
