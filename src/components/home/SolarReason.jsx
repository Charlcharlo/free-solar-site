export default function SolarReason(props) {
    return (
        <div className="col-start reason">
            <div className="circle ylw-block row-center">
                <img className="img-icon" src={props.icon} alt="" />
            </div>
            <h2>{ props.title }</h2>
        </div>
    )
}