const Products = () => {
    return (
        <div className="products scroll-style" id="Products">
            <div className="temp-title flex">
                <h2>pro<br />ducts</h2>
            </div>
            <div className="p-modal">
                <h3><img src={require("../images/citirx.svg")} alt="" /></h3>
                <h5>airline<br /> solution</h5>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi labore quibusdam enim perspiciatis iste, iure
                    consectetur ducimus ex architecto obcaecati molestias
                </p>
                <button className="seeMore">
                    <span>book a demo</span>
                    <i className="fa fa-play"></i>
                </button>
            </div>
            <div className="p-modal">
                <h3><img src={require("../images/github.svg")} alt="..." /></h3>
                <h5>tech <br /> solution</h5>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi labore quibusdam enim perspiciatis iste, iure
                    consectetur ducimus ex architecto obcaecati molestias
                </p>
                <button className="seeMore">
                    <span>book a demo</span>
                    <i className="fa fa-play"></i>
                </button>
            </div>
            <div className="p-modal">
                <h3>Bafuto .Inc</h3>
                <h5>educational <br /> solution</h5>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi labore quibusdam enim perspiciatis iste, iure
                    consectetur ducimus ex architecto obcaecati molestias
                </p>
                <button className="seeMore">
                    <span>book a demo</span>
                    <i className="fa fa-play"></i>
                </button>
            </div>
            <div className="p-modal">
                <h3>solo learn</h3>
                <h5>business <br /> solution</h5>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi labore quibusdam enim perspiciatis iste, iure
                    consectetur ducimus ex architecto obcaecati molestias
                </p>
                <button className="seeMore">
                    <span>book a demo</span>
                    <i className="fa fa-play"></i>
                </button>
            </div>
        </div>
    );
}

export default Products;
