import Feature from "./Feature";

export default function FeatureArray({ list }) {
  function renderItems(item, i) {
    return <Feature key={i} title={item.title} features={item.list} />;
  }

  return (
    <div className="row-between feature-array">{list.map(renderItems)}</div>
  );
}
