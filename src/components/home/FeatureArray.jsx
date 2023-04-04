import Feature from "./Feature"

export default function FeatureArray({list}) {
    function renderItems(item) {
        return (
            <Feature 
                title={item.title}
                icon={item.icon}
                features={item.features}
            />
        )
    }

    return (
        <div className="row-between feature-array">
            { list.map(renderItems) }
        </div>
    )
}