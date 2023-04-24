export default function Card(props) {
    return (
        <a href={props.url}>
            <div className="product-card" id={props.id}>
            <div>
                <img src={window.location.origin + props.imgUrl} alt="" onDragStart={(e) => {
                    e.preventDefault();
                }} />
            </div>
            <div className="col-between">
                <h1 className="title">{props.name}</h1>
                <h2 className="price">{props.price}</h2>
            </div>
            </div>
        </a>
    )
}