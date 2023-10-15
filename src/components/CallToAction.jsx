import CommonButton from "./CommonButton"

const CallToAction = ({ className, h5, h2, buttonName, h2ClassName = '' }) => {
    return (
        <div className={className}>
            <h5>
                {h5}
            </h5>
            <h2 className={h2ClassName}>
                {h2}
            </h2>
            <CommonButton name={buttonName} />
        </div>
    )
}

export default CallToAction

