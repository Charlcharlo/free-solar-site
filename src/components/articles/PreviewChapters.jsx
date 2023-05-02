import { ArrowRightAlt } from "@mui/icons-material";
import { kebabCase } from "lodash";

export default function PreviewChapters({info}) {
    const preview = info.sections[0].body.slice(0, 200);
    const url = kebabCase(info.title);

    return (
        <div className="article-preview">
            <a href={`/knowledge-base/${url}`}>
            <img src={`${window.location.origin}/images/articles/${info.image}`} alt={info.headerImage} />
            <div>
                <h1 className="title">{info.title}</h1>
                <p className="paragraph">
                    {`${preview}...`}
                </p>
                <a 
                            className="para-link"
                            href={info.url} 
                        >
                            Read More
                            <ArrowRightAlt fontSize="large" />
                        </a>
            </div>
            </a>
        </div>
    )
}