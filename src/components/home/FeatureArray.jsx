import Feature from "./Feature";

export default function FeatureArray({ list }) {
  function renderItems(item, i) {
    return (
      <Feature
        key={i}
        title={item.title}
        icon={item.icon}
        features={item.features}
      />
    );
  }

  return (
    <div className="row-between feature-array">{list.map(renderItems)}</div>
  );
}
