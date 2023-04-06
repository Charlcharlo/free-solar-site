export default function Feature(props) {
    function mapList(item) {
        return <li>{item}</li>
    }
    return (
        <div className="row-between feature-block">
            <img className="vector-icon" src={props.icon} alt="" />
            <div>
                <h2 className="title">{props.title}</h2>
                <ul>
                    {props.features.map(mapList)}
                </ul>
                <a href={props.link}>Learn More</a>
            </div>
        </div>
    )
};