import NavBar from "../global/Navbar";

export default function Header() {
  return (
    <div className="header main-body" id="products-header">
      <NavBar />
      <div className="body-block">
        <h1 className="title">Product Collection</h1>
      </div>
      <div className="fade-gray" />
    </div>
  );
}
