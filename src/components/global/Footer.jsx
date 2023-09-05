import SocialLinks from "../home/SocialLinks";

export default function Footer({ contact }) {
  const today = new Date();
  return (
    <div className="col-start footer">
      <div className="row-center">
        <img
          className="logo-nav"
          src={`${window.location.origin}/images/color-logo.png`}
          alt="FreeSolarZA Logo"
        />
        <h1>FreeSolarZA</h1>
      </div>
      <SocialLinks data={contact} />
      <p>©Copyright {today.getFullYear()}</p>
    </div>
  );
}
