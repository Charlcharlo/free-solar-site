import { ArrowRightAlt } from "@mui/icons-material";
import TextBlock from "../global/TextBlock";
import FeatureArray from "./FeatureArray";

export default function DarkParagraph({ data }) {
  return (
    <div className="dark-paragraph">
      <img
        src={`${window.location.origin}/images/${data.img.url}`}
        alt={data.img.title}
      />
      <div className="body-block">
        <TextBlock title={data.title} body={data.body} />
        <FeatureArray list={data.itemLists} />
        <a className="para-link" href={data.linkTo}>
          {data.linkText}
          <ArrowRightAlt fontSize="large" />
        </a>
      </div>
    </div>
  );
}
