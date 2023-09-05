export default function Feature(props) {
  function mapList(item, i) {
    return <li key={i}>{item}</li>;
  }
  return (
    <div className="row-between feature-block">
      <div>
        <h2 className="title">{props.title}</h2>
        <ul>{props.features.map(mapList)}</ul>
      </div>
    </div>
  );
}
