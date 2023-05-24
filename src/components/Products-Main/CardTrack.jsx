import { useEffect } from "react";
import Card from "./Card";

export default function CardTrack({
  name,
  products,
  handleScroll,
  checkWidth,
}) {
  useEffect(() => {
    checkWidth();
  });

  function renderCards(card, i) {
    if (card.published) {
      return (
        <Card
          key={i}
          imgUrl={card.img.url}
          name={card.name}
          url={`products/${card.category}/${card.id}`}
          price={card.price}
          title={card.title}
        />
      );
    } else return null;
  }

  return (
    <div
      className="row-start product-track"
      id={name}
      onScroll={handleScroll}
      onMouseEnter={checkWidth}
    >
      {products.map(renderCards)}
    </div>
  );
}
