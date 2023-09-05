export default function OffsetSquare(props) {
  return (
    <div className="square-main">
      <div className="square-ylw" />
      <img
        className="square-img"
        src={`${window.location.origin}/images/${props.url}`}
        alt={props.title}
        title={props.title}
      />
    </div>
  );
}
