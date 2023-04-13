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
                products={test}
            />
            <CardCollection 
                title="Standalone Items"
                products={testLong}
            />
            <CardCollection 
                title="Extras"
                products={test}
            />
        </FlexProvider>
    )
}