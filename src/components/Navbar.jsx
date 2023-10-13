const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                lOGO
            </div>
            <input type="checkbox" id="checkbox_toggle" />
            <label htmlFor="checkbox_toggle" className="hamburger-menu">&#9776;</label>
            <div className="main-links">
                <a href="#" className="active">Home</a>
                <a href="#">About Us</a>
                <a href="#">Our Blog</a>
                <a href="#">Support</a>
                <a href="#">Affiliate</a>
                <a href="#">Programs</a>
            </div>
            <div className="auth-buttons">
                <button className="login-btn">Login</button>
                <button className="signup-btn">Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;
