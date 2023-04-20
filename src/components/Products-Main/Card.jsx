export default function Card(props) {
    return (
        <div className="product-card" id={props.id}>
            <div>
                <img src={window.location.origin + props.imgUrl} alt="" onDragStart={(e) => {
                    e.preventDefault();
                }} />
            </div>
            <div className="col-between">
                <a href={props.url} className="title">{props.name}</a>
                <h2 className="price">{props.price}</h2>
            </div>
        </div>
    )
}