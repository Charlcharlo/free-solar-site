import Facebook from "./icons/Facebook";
import Instagram from "./icons/Instagram";
import LinkedIn from "./icons/LinkedIn";

export default function SocialLinks({ data }) {
  return (
    <div className="row-start social-links">
      <a href={data.facebook}>
        <Facebook />
      </a>
      <a href={data.linkedIn}>
        <LinkedIn />
      </a>
      <a href={data.instagram}>
        <Instagram />
      </a>
    </div>
  );
}
