import SignUpButton from "./SignUpButton"
import googleIcon from '../lib/google.svg'
import InputComponent from "./InputComponent"
import lineBreakIcon from "../lib/line-break.svg"

const inputItems = [
    "First Name*",
    "Last Name*",
    "Email*",
    "Password*"
]

const SignUpForm = () => {
    return (
        <div className="sign-up-form">
            <SignUpButton
                additionalClass="google-btn"
                buttonText="Continue With Google"
                buttonImage={googleIcon}
            />
            <div>
                <img src={lineBreakIcon} />
                <img src={lineBreakIcon} />
            </div>
            <InputComponent
                inputItems={inputItems}
            />
            <div className="gmt">(GMT+05:30) india standard Time - Calcutta </div>
            <SignUpButton
                additionalClass="user-signup-btn"
                buttonText="Signup as a user"
            />
            <div className="terms-cond">
                By signing up you agree to our <bold>Terms & Conditions</bold>{' '} and <bold>Privacy Policy.</bold>{' '}
                and confirm that you are at least 18 years old.
            </div>
            <div className="line-break">
                <img src={lineBreakIcon} />{' '}OR{' '}
                <img src={lineBreakIcon} />

            </div>

            <SignUpButton
                additionalClass="creator-signup-btn"
                buttonText="Signup as a creator"
            />
            <div className="login-prompt">
                Already have an account?{' '}
                <bold>
                    Login
                </bold>{' '}
            </div>
        </div>
    )
}

export default SignUpForm
