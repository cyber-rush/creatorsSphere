import lowerParadise from '../lib/lower-paradise.svg'

import SignUpForm from "./SignUpForm"


import upperParadise from '../lib/upper-paradise.svg'
const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-section-text">
                <h1>A Creator’s Paradise</h1>
                <h4>Were Creativity Meets Success</h4>
            </div>
            <SignUpForm />
            <img src={upperParadise} className='upperTri' />
            <img src={lowerParadise} className='lowerTri' />

        </div>
    )
}

export default HeroSection
