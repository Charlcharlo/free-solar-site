import NavBar from "../global/Navbar";

export default function Template({info}) {
    return (
        <div id="article-template">
            <NavBar />
            <div className="body-block-special">
                <div className="article-page">
                    <img 
                        className="article-image"
                        src={`${window.location.origin}/images/articles/${info.image}`} 
                        alt={info.image} 
                    />
                    <div className="article-body">
                        <h1 className="title">{info.title}</h1>
                        <p className="paragraph">{info.body}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}