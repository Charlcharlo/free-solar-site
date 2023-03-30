import '../styles.css';
import Header from './Header';
import BannerImage from './utils/BannerImage';

function App() {
  return (
    <div className="App">
            <BannerImage
        image="./images/naturesynergywithsolar.jpeg"
        alt="man-with-hard-hat"
      />
      <Header />
      <BannerImage 
        image="./images/nhh.jpg"
        alt="man-with-hard-hat"
      />
    </div>
  );
}

export default App;
