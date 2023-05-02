import { kebabCase } from "lodash";
import BackToTop from "../global/BackToTop";
import FlexProvider from "../global/FlexContext";
import NavBar from "../global/Navbar";
import Contents from "./Contents";

export default function TemplateChapters({ info }) {
  function renderSections(section, i) {
    const id = kebabCase(section.title);
    return (
      <div className="sub-section" key={i} id={id}>
        <h2 className="sub-title">{section.title}</h2>
        <p className="paragraph">{section.body}</p>
        {section.hasImage && (
          <div className="para-image-block">
            <img
              className="para-image"
              src={`${window.location.origin}/images/articles/${section.image}`}
              alt={section.image}
            />
            <p className="image-tag">{section.imageTag}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <FlexProvider>
      <div id="article-template">
        <BackToTop start={400} />
        <NavBar />
        <div className="body-block-special">
          <div className="article-page">
            <div className="article-header">
              <img
                className="header-image"
                src={`${window.location.origin}/images/articles/${info.image}`}
                alt={info.image}
              />
              <div>
                <h1 className="title">{info.title}</h1>
                <Contents info={info.sections} />
              </div>
            </div>
            <div className="article-body">
              {info.sections.map(renderSections)}
            </div>
          </div>
        </div>
      </div>
    </FlexProvider>
  );
}
