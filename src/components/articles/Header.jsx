import NavBar from "../global/Navbar";

export default function Header(props) {
    return (
        <div 
            className="header main-body"
            id="products-header"
            style={{backgroundImage: `url(${window.location.origin}/images/articles/${props.image})`}}
        >
            <NavBar />
            <div className="body-block">
                <h1 className="title">{props.title}</h1>
            </div>
            <div className="fade-gray" />
        </div>
    )
}