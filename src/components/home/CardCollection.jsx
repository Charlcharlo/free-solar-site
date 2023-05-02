import Card from "./Card";

export default function CardCollection() {
  return (
    <div className="body-block row-between" id="card-collection">
      <Card image="./images/sun.png" text="Expert Advice" />
      <Card image="./images/panel-multiple.png" text="Affordable Options" />
      <Card
        image="./images/green-bulb.png"
        text="Off-grid wifi and security cameras"
      />
      <Card
        image="./images/panel-rising-sun.png"
        text="Government incentives available"
      />
    </div>
  );
}
