import FeatureCard from "./FeatureCard"
import mobileFrameIcon from '../lib/mobile-frame.svg'
import models from "../lib/models.svg"
import automation from "../lib/automation.svg"
import community from "../lib/community.svg"
import prize from "../lib/prize.svg"

const KeyFeaturesSection = () => {
    return (
        <div className="key-features-section">
            <div className="key-heading">
                <span>
                    Elevate{' '}
                </span>
                Your Craft
            </div>
            <div className='cards'>
                <FeatureCard
                    className="card large-card"
                    heading="Unlock Your ABC Earning Potential"
                    paragraph="Are you ready to take your earning potential to the next level? With ABC, you have multiple avenues to monetize your content seamlessly. From subscriptions and tips to merchandise sales and NFTS, ABC helps you diversify your revenue streams and maximize your income."
                    image={mobileFrameIcon}
                />
                <FeatureCard
                    className="card large-card"
                    heading="Boost Your Sales with Built-in E-commerce"
                    paragraph="Take control of your brand and boost your sales with ABC's built-in e-commerce functionality. Showcase and sell your exclusive products, whether it's merchandise, digital downloads, or personalized experiences. Integrate your store effortlessly and turn your creative ideas into profitable ventures."
                    image={models}
                />
                <FeatureCard
                    className="card small-card"
                    heading="Save Time with Automation and Efficiency"
                    paragraph="Supercharge your content creation with ABC's automation tools. Streamline scheduling, multi-platform management, and more. Save time on repetitive tasks, focus on exceptional content."
                    image={automation}
                    imageClassName="image-order"
                />
                <FeatureCard
                    className="card small-card"
                    heading="Join a Supportive Community"
                    paragraph="Join ABC's vibrant creator community. Connect with like-minded individuals, collaborate, and share experiences. Access mental health services and resources for personal and professional growth."
                    image={community}
                    imageClassName="image-order"
                />
                <FeatureCard
                    className="card small-card"
                    heading="Unlock Exclusive Opportunities and Prizes"
                    paragraph="Enjoy ABC contests and challenges for valuable prizes. Showcase your exceptional talent and win business grants, scholarships, and more. Thrive on our platform with recognition and rewards."
                    image={prize}
                    imageClassName="image-order"
                />
            </div>

        </div>
    )
}

export default KeyFeaturesSection
