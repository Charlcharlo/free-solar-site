import { kebabCase } from "lodash";
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
      const kebabName = kebabCase(card.name);
      const kebabCat = kebabCase(card.category);
      // console.log(kebabCat);
      return (
        <Card
          key={card.id}
          imgUrl={card.img.url}
          name={card.name}
          url={`/products/${kebabCat}/${kebabName}`}
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
