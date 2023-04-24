import { articles, articlesChapters } from "../data/articles";
import Header from "./articles/Header";
import Preview from "./articles/Preview";
import PreviewChapters from "./articles/PreviewChapters";

export default function Articles() {
    function renderPreview(info, i) {
        return (
            <Preview key={i} info={info} />
        )
    }
    return (
        <div>
            <Header 
                title="Technical Articles"
                image="panel-hat.jpg"
            />
            <div className="body-block-special">
                {articles.map(renderPreview)}
                <PreviewChapters info={articlesChapters[0]} />
            </div>
        </div>
    )
}