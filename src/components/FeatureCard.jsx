
const FeatureCard = ({ className, heading, paragraph, image, imageClassName }) => {
    return (
        <div className={className}>
            <h3>
                {heading}
            </h3>
            <p>
                {paragraph}
            </p>
            <img src={image} className={imageClassName} />
        </div>
    )
}

export default FeatureCard
