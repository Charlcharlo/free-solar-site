import { useRef } from "react"
import { useDraggable } from "react-use-draggable-scroll";
import Card from "./Card"

export default function CardTrack({products}) {
    const ref = useRef();
    const { events } = useDraggable(ref, {applyRubberBandEffect:true});

    function renderCards(card) {
        return(
            <Card 
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
            {...events}
            ref={ref}
        >
            {products.map(renderCards)}
        </div>
    )
}