const Contact = () => {
    return (
        <div className="contact scroll-style">
            <div className="temp-title flex">
                <h2>Contact<br />us</h2>
            </div>
            <div className="p-modal">
                <div className="c-info">
                    <h4>support</h4>
                    <p><i className="fa fa-phone"></i>+123 466 78 90</p>
                    <p><i className="fa fa-envelope"></i>support@mail.com</p>
                </div>
                <br />
                <div className="c-info">
                    <h4>sales</h4>
                    <p><i className="fa fa-phone"></i>+123 466 78 90</p>
                    <p><i className="fa fa-envelope"></i> support@mail.com</p>
                </div>
                <button className="seeMore">
                    <span>book a demo</span>
                    <i className="fa fa-play"></i>
                </button>
            </div>
            <div className="p-modal">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.819767969889!2d3.2709210209300643!3d6.5444290801264495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8f94e5548ecf%3A0x1679579032bac15b!2sBAFUTO%20INSTITUTE%20OF%20MANAGEMENT%20AND%20INFORMATION%20TECHNOLOGY!5e0!3m2!1sen!2sng!4v1670507233704!5m2!1sen!2sng" width="600" height="450" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="location"></iframe>
            </div>
        </div>
    );
}

export default Contact;
