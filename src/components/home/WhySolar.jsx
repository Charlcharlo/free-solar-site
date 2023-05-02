import SolarReason from "./SolarReason";

export default function WhySolar(props) {
  function renderReasons(reason, i) {
    return <SolarReason key={i} title={reason.text} icon={reason.icon} />;
  }

  return (
    <div className="body-block" id="why-solar">
      <h1 className="title">{props.title}</h1>
      <div className="row-between">{props.reasons.map(renderReasons)}</div>
    </div>
  );
}
