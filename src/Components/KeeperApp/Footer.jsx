import "./Footer.css";


const Footer = () => {
    return (
        <div>
            <div className="footer">
                <p>copyright {new Date().getFullYear()}</p>
            </div>
        </div>
    );
};

export default Footer;