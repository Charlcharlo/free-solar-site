import { useEffect } from "react"
import Card from "./Card"

export default function CardTrack({name, products, handleScroll, checkWidth}) {
    useEffect(() => {
        checkWidth();
    })

    function renderCards(card, i) {
        return(
            <Card 
                key={i}
                imgUrl={card.imgUrl}
                name={card.name}
                url={card.url}
                price={card.price}
            />
        )
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
    )
}