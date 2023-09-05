import NavBar from "../global/Navbar";
import CardCollection from "./CardCollection";
import Title from "../global/Title";

export default function Header({ data, contact }) {
  return (
    <div className="header col-between">
      <NavBar contact={contact} />
      <div className="body-block" id="header-banner">
        <Title text={data.title} />
      </div>
      <CardCollection data={data.cards} />
      <div className="fade-gray" />
    </div>
  );
}
