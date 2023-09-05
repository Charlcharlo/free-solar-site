export default function Card({ image, text, url }) {
  return (
    <a className="card col-around" href={url}>
      <div className="circle ylw-block row-center">
        <img className="img-icon" src={image} alt="" />
      </div>
      <h2 className="title">{text}</h2>
    </a>
  );
}
