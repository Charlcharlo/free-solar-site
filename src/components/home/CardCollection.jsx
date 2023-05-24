import Card from "./Card";

export default function CardCollection() {
  return (
    <div className="body-block row-between" id="card-collection">
      <Card image="./images/panel-rising-sun.png" text="Registered NPO" />
      <Card image="./images/sun.png" text="Expert Advice and Service" />
      <Card
        image="./images/panel-multiple.png"
        text="Community First Approach"
      />
      <Card image="./images/green-bulb.png" text="Off-grid solutions for all" />
    </div>
  );
}
