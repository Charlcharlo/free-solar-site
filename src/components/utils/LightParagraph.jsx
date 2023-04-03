import OffsetSquare from "./OffsetSquare";

export default function LightParagraph() {
    return (
        <div className="body-block">
            <div className="row-between info-block">
                <div className="text-block">
                    <h1 className="title">On a mission to provide renewable energy for all</h1>
                    <p className="paragraph">FreeSolarZA was founded in 2021 with the goal of getting our country tapped into the sun and as off the grid as possible. After researching the best way to provide renewable energy to his home, our founder, Ivan Minev, soon saw he could use his findings and expertise to help many more people do the same. To date, FreeSolarZA has helped homes and businesses alike move towards a more sustainable future by overseeing the construction and maintenance of solar wifi hotspots, off-the-grid security cameras, as well as full-scale solar conversions so that you never have to worry about grid instability again.</p>
                </div>
                <OffsetSquare />
            </div>
        </div>
    )
}