

const SignUpButton = ({ buttonText, buttonImage, additionalClass }) => {
    return (
        <>
            <button className={`signup-button-style ${additionalClass}`}>
                {
                    buttonImage && <img src={buttonImage} />
                }

                <span>{buttonText}</span>
            </button>
        </>
    )
}

export default SignUpButton
