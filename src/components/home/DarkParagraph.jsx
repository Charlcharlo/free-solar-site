import { specialProducts, panelOptions } from "../../data/home"
import TextBlock from "../global/TextBlock";
import FeatureArray from "./FeatureArray";

export default function DarkParagraph() {
    return (
        <div className="dark-paragraph">
            <div className="body-block">
            <TextBlock 
                    title="Various sizes available"
                    body="We have several available options depending on your budget and your needs"
                />
                <FeatureArray
                    list={panelOptions}
                />
                <TextBlock 
                    title="Find the right solution for you"
                    body="As well as providing full-scale solar conversions, we also have a variety of options available to suit your specific needs and budget."
                />
                <FeatureArray 
                    list={specialProducts}
                />
            </div>
        </div>
    )
}