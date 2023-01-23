const Press = () => {
    return (
        <div className="press temp-2 col-2-grid id="Press">
            <div className="temp-2-info-container flex">
                <h3>
                    Infinte sofware solutions plans global extensions
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
            <div className="ref-corner col-2-grid">
                <div className="temp-title flex">
                    <h2>Press</h2>
                </div>
                <div>
                    <img src={require('../images/2.jpg')} alt="" />
                </div>
                <div>
                    <img src={require('../images/1.jpg')} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Press;
