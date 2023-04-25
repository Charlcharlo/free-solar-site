import { kebabCase } from "lodash";

export default function Contents({info, i}) {
    function renderLinks(section) {
        const id= kebabCase(section.title);
        return <a key={i} href={`${window.location.href}#${id}`}>{section.title}</a>
    }

    
    return (
        <div className="article-contents">
            <h1 className="title">Subheadings</h1>
            {info.map(renderLinks)}
        </div>
    )
}