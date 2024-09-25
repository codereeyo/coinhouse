

function Header(){

    return (
        <div className="inner-header">
            <div className="logo">
                <p>COINHOUSE</p>
            </div>
            <div className="nav-container">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Chart</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Join us</a></li>
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