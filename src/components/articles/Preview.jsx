import { ArrowRightAlt } from "@mui/icons-material";

export default function Preview({info}) {
    const preview = info.body.slice(0, 200);
    return (
        <div className="article-preview">
            <a href={info.url}>
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