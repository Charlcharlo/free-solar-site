export default function Contents({info}) {
    function renderLinks(section) {
        return <a href="">{section.title}</a>
    }
    
    return (
        <div className="article-contents">
            <h1 className="title">Contents</h1>
            {info.map(renderLinks)}
        </div>
    )
}