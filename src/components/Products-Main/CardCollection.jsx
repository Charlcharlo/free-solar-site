import CardTrack from "./CardTrack";

export default function CardCollection(props) {
    return (
        <div className="body-block product-collection">
            <h1 className="title">{props.title}</h1>
            <CardTrack products={props.products} />
            <div className="small-fade-L" />
            <div className="small-fade-R" />
        </div>
    )
}