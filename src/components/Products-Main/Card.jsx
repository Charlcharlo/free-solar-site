export default function Card(props) {
    return (
        <div className="product-card">
            <img src={props.imgUrl} alt="" />
            <div className="col-between">
                <a href={props.url} className="title">{props.name}</a>
                <h2 className="price">{props.price}</h2>
            </div>
        </div>
    )
}