const AboutUs = () => {
    return (
        <div className="about temp-2 col-2-grid" id="About">
            <div className="ref-corner col-2-grid">
                <div className="temp-title flex">
                    <h2>About<br />us</h2>
                </div>
                <div>
                    <img src={require('../images/1.jpg')} alt="" />
                </div>
                <div>
                    <img src={require('../images/3.jpg')} alt="" />
                </div>
            </div>
            <div className="temp-2-info-container flex">
                <h3>
                    Believe you can make something different
                    if you are determined
                </h3>
                <p>
                    tempore impedit nemo enim, ratione ex soluta velit libero
                    nisi pariatur tempora aperiam repellat placeat iure, nulla
                    dicta. Culpa architecto fuga veritatis, libero veniam
                    temporibus exercitationem!
                </p>
                <button className="seeMore">
                    <span>see more</span>
                    <i className="fa fa-play"></i>
                </button>
            </div>
        </div>
    );
}

export default AboutUs;
