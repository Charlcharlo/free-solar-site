import Card from "./Card";

export default function CardCollection({ data }) {
  function renderCards(card, i) {
    return (
      <Card
        key={i}
        image={`${window.location.origin}/images/${card.img}`}
        text={card.text}
        url={card.url}
      />
    );
  }
  return (
    <div className="body-block row-between" id="card-collection">
      {data.map(renderCards)}
    </div>
  );
}
