import NavBar from "../global/Navbar";

export default function TemplateChapters({info}) {
    function renderSections(section, i) {
        return (
            <div key={i}>
                <h2 className="sub-title">{section.title}</h2>
                <p className="paragraph">{section.body}</p>
            </div>
        )
    }

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
                        {info.sections.map(renderSections)}
                    </div>
                </div>
            </div>
        </div>
    )
}