import { kebabCase } from "lodash";

export default function Contents({ info, i }) {
  function renderLinks(section) {
    const id = kebabCase(section.title);
    return (
      <a key={i} href={`${window.location.href}#${id}`}>
        {section.title}
      </a>
    );
  }

  return <div className="article-contents">{info.map(renderLinks)}</div>;
}
