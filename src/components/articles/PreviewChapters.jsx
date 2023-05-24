import { ArrowRightAlt } from "@mui/icons-material";

export default function PreviewChapters({ info }) {
  const preview = info.plainText.substring(0, 150);
  return (
    <div className="article-preview">
      <a href={`/knowledge-base/${info.id}`}>
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
