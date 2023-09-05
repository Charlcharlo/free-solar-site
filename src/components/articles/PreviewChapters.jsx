import { ArrowRightAlt } from "@mui/icons-material";
import { kebabCase } from "lodash";

export default function PreviewChapters({ info }) {
  const preview = info.plainText.substring(0, 150);
  const kebabName = kebabCase(info.name);
  return (
    <div className="article-preview">
      <a href={`/knowledge-base/${kebabName}`}>
        <img
          src={`https://freesolarza.co.za/images/articles/${info.img.url}`}
          alt={info.headerImage}
        />
        <div>
          <h1 className="title">{info.name}</h1>
          <p className="paragraph">{`${preview}...`}</p>
          <p className="para-link">
            Read More
            <ArrowRightAlt fontSize="large" />
          </p>
        </div>
      </a>
    </div>
  );
}
