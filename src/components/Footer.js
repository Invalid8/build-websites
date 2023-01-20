const Footer = () => {
    return (
        <footer>
            <nav className="navigation-bar flex">
                <div className="logo flex">
                    <img src={require('../images/logo.png')} alt="logo" />
                    <span>build</span>
                </div>
                <div className="links flex">
                    <ul>
                        <li><a href="/">about us</a></li>
                        <li><a href="/">products</a></li>
                        <li><a href="/">press</a></li>
                        <li><a href="/">careers</a></li>
                        <li><a href="/">contact us</a></li>
                    </ul>
                </div>
                <div className="social-links flex">
                    <i className="fa fa-google-plus"></i>
                    <i className="fa fa-twitter"></i>
                    <i className="fa fa-github"></i>
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-telegram"></i>
                </div>
            </nav>
        </footer>
    );
}

export default Footer;
