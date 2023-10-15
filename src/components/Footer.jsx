
import SocialHandles from "./SocialHandles";
import fbIcon from "../lib/fb-icon.svg";
import twitterIcon from "../lib/twitter.svg";
import instaIcon from "../lib/insta.svg";
import youtubeIcon from "../lib/youtube.svg";

const companyItems = [
    "About Us",
    "Support",
    "Blog",
    "Login",
    "SignUp",
    "Contact Us"
];

const programsItems = [
    "Affiliate Program",
    "Ambassador Program",
    "Partnership Program"
];

const policyItems = [
    "Legal",
    "DMCA",
    "USC 2257",
    "Privacy Policy",
    "Terms and Conditions"
];


const icons = [fbIcon, twitterIcon, instaIcon, youtubeIcon];

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">LOGO</div>
            <div className="company">
                Company
                {
                    companyItems.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))
                }
            </div>
            <div className="programs">
                Programs
                {
                    programsItems.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))
                }
            </div>
            <div className="policy">
                Policy
                {
                    policyItems.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))
                }
            </div>
            <div className="social-icons">
                <div className="follow-us">Follow Us</div>
                <SocialHandles icons={icons} />
            </div>

        </div >
    );
};

export default Footer;
