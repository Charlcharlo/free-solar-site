import OffsetSquare from "./OffsetSquare";
import TextBlock from "../global/TextBlock";
import { ArrowRightAlt } from "@mui/icons-material";

export default function LightParagraph(props) {
    return (
        <div className="body-block">
            <div className="row-between info-block">
                <div>
                    <TextBlock 
                        title={props.title}
                        body={props.body}
                    />
                    { props.newTab ?
                    (
                        <a 
                            className="para-link"
                            href={props.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            {props.linkText}
                            <ArrowRightAlt fontSize="large" />
                        </a>
                    ) :
                    (
                        <a 
                            className="para-link"
                            href={props.url} 
                        >
                            {props.linkText}
                            <ArrowRightAlt fontSize="large" />
                        </a>
                    ) }
                </div>
                <OffsetSquare 
                    url={props.image}
                />
            </div>
        </div>
    )
}