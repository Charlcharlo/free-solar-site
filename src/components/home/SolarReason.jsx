import ReasonIcon from "./icons/ReasonIcon";

export default function SolarReason(props) {
  return (
    <div className="col-start reason">
      <div className="circle ylw-block row-center">
        <ReasonIcon icon={props.icon} />
      </div>
      <h2>{props.title}</h2>
    </div>
  );
}
