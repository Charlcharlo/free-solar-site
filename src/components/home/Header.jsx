import NavBar from "../global/Navbar";
import CardCollection from "./CardCollection";
import Title from "../global/Title";

export default function Header() {
  return (
    <div className="header col-between">
      <NavBar />
      <div className="body-block" id="header-banner">
        <Title text="Tap into clean and renewable energy from the sun" />
      </div>
      <CardCollection />
      <div className="fade-gray" />
    </div>
  );
}
