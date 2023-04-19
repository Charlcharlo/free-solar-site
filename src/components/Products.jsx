import { test, testLong } from "../data/products";
import FlexProvider from "./global/FlexContext";
import CardCollection from "./Products-Main/CardCollection";
import Header from "./Products-Main/Header";

export default function Products() {
    return (
        <FlexProvider>
            <Header />
            <CardCollection 
                title="Solar Conversions"
                name="conversions"
                products={test}
            />
            <CardCollection 
                title="Standalone Items"
                name="standalone"
                products={testLong}
            />
            <CardCollection 
                title="Extras"
                name="extras"
                products={test}
            />
        </FlexProvider>
    )
}