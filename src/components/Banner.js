const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-text">
                <h1>build a problem solver</h1>
                <p>at consistent prices</p>
                <button className='seeMore'>
                    <span>send a msg</span>
                    <i className="fa fa-play"></i>
                </button>
            </div>
            <div className="banner-img">
                <img src={require('../images/banner.png')} alt="" />
            </div>
        </div>
    );
}

export default Banner;
