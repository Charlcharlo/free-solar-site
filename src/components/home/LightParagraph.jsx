import OffsetSquare from "./OffsetSquare";
import TextBlock from "../global/TextBlock";

export default function LightParagraph(props) {
    return (
        <div className="body-block">
            <div className="row-between info-block">
                <TextBlock 
                    title={props.title}
                    body={props.body}
                />
                <OffsetSquare 
                    url={props.url}
                />
            </div>
        </div>
    )
}