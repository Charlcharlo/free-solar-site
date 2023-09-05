import NavBar from "../global/Navbar";

export default function Header({ contact }) {
  return (
    <div className="header main-body" id="products-header">
      <NavBar contact={contact} />
      <div className="body-block">
        <h1 className="title">Product Collection</h1>
      </div>
      <div className="fade-gray" />
    </div>
  );
}
