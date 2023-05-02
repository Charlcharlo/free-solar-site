export default function Card({ image, text }) {
  return (
    <div className="card col-around">
      <div className="circle ylw-block row-center">
        <img className="img-icon" src={image} alt="" />
      </div>
      <h2 className="title">{text}</h2>
    </div>
  );
}
