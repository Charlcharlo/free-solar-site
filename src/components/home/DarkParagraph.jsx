import { specialProductsTest } from "../../data/home"
import TextBlock from "../global/TextBlock";
import FeatureArray from "./FeatureArray";

export default function DarkParagraph() {
    return (
        <div className="dark-paragraph">
            <div className="body-block">
                <TextBlock 
                    title="Find the right solution for you"
                    body="As well as providing full-scale solar conversions, we also have a variety of options available to suit your specific needs and budget."
                />
                <FeatureArray 
                    list={specialProductsTest}
                />
            </div>
        </div>
    )
}