import './NavBar.css'


const NavBar = () => {
    return (
        <div>
            <nav className="nav">
                <a href="/">React - NavBar</a>
                <ul className='links'>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Service">Service</a></li>
                    <li><a href="/Contact">Contact</a></li>
                </ul>
            </nav>

        </div>
    );
};

export default NavBar;