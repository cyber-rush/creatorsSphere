

import CallToAction from "./CallToAction"
import CommonButton from "./CommonButton"

const AffiliateProgramSection = () => {
    return (
        <>
            <div className="affiliate-program-section">
                <div className="affliate-main-content">
                    <h1>Ready to Cash in Your Connections?
                        Join Our Affiliate Program
                    </h1>
                    <h5>Join now and get{' '}
                        <span>7.5%</span>{' '}
                        commission on all creator referrals for the entire year.
                    </h5>
                    <CommonButton name="Earn Now" />
                </div>
            </div>
            <div className="call-to-action-2">
                <CallToAction
                    className="call-to-action"
                    h5="Become part of a vibrant and supportive community of like-minded creators by joining ABC's exclusive platform.Collaborate, learn, and connect with fellow creators who share your passion for adult content creation."
                    h2="Join the ABC Community"
                    h2ClassName="custom-order"
                    buttonName="Learn More"
                />
            </div>

        </>
    )
}

export default AffiliateProgramSection
