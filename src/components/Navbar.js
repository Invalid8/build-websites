const Navbar = () => {

    return (
        <nav className="navigation-bar flex" onLoad={(e) => {
            window.addEventListener('scroll', () => {
                if (window.scrollY >= e.target.parentElement.parentElement.getBoundingClientRect().height - 10) {
                    e.target.parentElement.parentElement.classList.add('fixed-navigationBar');
                    e.target.parentElement.parentElement.children[1].children[1].classList.remove('show-links');

                    e.target.parentElement.parentElement.children[1].children[2].children[0].classList.remove('show-input');
                    e.target.parentElement.parentElement.children[1].children[2].classList.remove('searchBoxFixed');
                } else {
                    e.target.parentElement.parentElement.classList.remove('fixed-navigationBar');
                }
            })
        }}>
            <div className="logo flex">
                <img src={require('../images/logo.png')} alt="logo" />
                <span>build</span>
            </div>
            <div className="links flex">
                <button className='menu-btn'>
                    <i className="fa fa-bars" onClick={(e) => {
                        console.log(e.target.parentElement.nextElementSibling)
                        if (!e.target.parentElement.nextElementSibling.classList.contains('show-links')) {
                            e.target.parentElement.nextElementSibling.classList.add('show-links');
                            e.target.parentElement.parentElement.parentElement.classList.add('fixed-navigationBar')

                            e.target.parentElement.parentElement.children[2].classList.remove("searchBoxFixed")
                            e.target.parentElement.parentElement.children[2].children[1].classList.remove('show-input');
                        } else {
                            e.target.parentElement.nextElementSibling.classList.remove('show-links');
                            if (window.scrollY < e.target.parentElement.parentElement.parentElement.getBoundingClientRect().height - 10) {
                                e.target.parentElement.parentElement.parentElement.classList.remove('fixed-navigationBar');
                            }
                        }
                    }}></i>
                </button>
                <ul>
                    <li><a href="#AboutUs">about us</a></li>
                    <li><a href="#Product">products</a></li>
                    <li><a href="#Press">press</a></li>
                    <li><a href="#Careers">careers</a></li>
                    <li><a href="#ContactUs">contact us</a></li>
                </ul>
                <div className="searchBox flex">
                    <input type="search" name="search" className="search-input" />
                    <button>
                        <i className="fa fa-search" onClick={(e) => {
                            if (!e.target.parentElement.previousElementSibling.classList.contains('show-input')) {
                                e.target.parentElement.parentElement.classList.add("searchBoxFixed")
                                e.target.parentElement.previousElementSibling.classList.add('show-input');
                            } else {
                                e.target.parentElement.parentElement.classList.remove("searchBoxFixed")
                                e.target.parentElement.previousElementSibling.classList.remove('show-input');
                            }
                            e.target.parentElement.previousElementSibling.value = '';
                            e.target.parentElement.parentElement.parentElement.children[1].classList.remove('show-links');
                        }}></i>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
