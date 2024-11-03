

function Header(){

    return (
        <div className="inner-header">
            <div className="logo">
                <p>COINHOUSE</p>
            </div>
            <div className="nav-container">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#chart">Chart</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#footer">Join us</a></li>
                </ul>
            </div>
            <div className="social-links">
                <a href=""><i className="fa-brands fa-x-twitter"></i></a>
                <a href=""><i className="fa-brands fa-discord"></i></a>
                <a href=""><i className="fa-brands fa-telegram"></i></a>
            </div>
        </div>
    )
}

export default Header