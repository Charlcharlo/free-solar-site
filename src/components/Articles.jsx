import { articlesChapters } from "../data/articles";
import Header from "./articles/Header";
import PreviewChapters from "./articles/PreviewChapters";
import BackToTop from "./global/BackToTop";
import FlexProvider from "./global/FlexContext";

export default function Articles() {
    function renderPreview(info, i) {
        if (info.published) {
            return (
                <PreviewChapters key={i} info={info} />
            )
        } else return null;
    }
    return (
    <FlexProvider>
        <div id="articles-preview">
            <BackToTop start={400} />
            <Header 
                title="Technical Articles"
                image="panel-hat.jpg"
            />
            <div className="body-block-special">
                {articlesChapters.map(renderPreview)}
            </div>
        </div>
    </FlexProvider>
    )
}