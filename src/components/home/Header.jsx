import NavBar from "../global/Navbar";
import CardCollection from "./CardCollection";
import Title from "../global/Title";

export default function Header() {
  return (
    <div className="header col-between">
      <NavBar />
      <div className="body-block" id="header-banner">
        <Title text="Get out of the Eskom lane and into the 12v Lane" />
      </div>
      <CardCollection />
      <div className="fade-gray" />
    </div>
  );
}
