

function About(){
    return(
        <div className="inner-about">
            <h2>ABOUT <br /><span>COINHOUSE</span></h2>
            <div className='feature'>
                <div className="left-col">
                    <div className="feature-container">
                        <div className='inner-feature'>
                            <i className="fa-solid fa-hand-holding-dollar"></i>
                            <div className='text-container'>
                                <h3>Live Prices</h3>
                                <p>Get real-time updates on top cryptocurrencies.</p>
                            </div>
                        </div>
                    </div>
                    <div className="feature-container">
                        <div className='inner-feature'>
                            <i className="fa-solid fa-database"></i>
                            <div className='text-container'>
                                <h3>In-Depth Data</h3>
                                <p>Detailed stats for coins like Bitcoin and Ethereum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="feature-container">
                        <div className='inner-feature'>
                            <i className="fa-solid fa-user"></i>
                            <div className='text-container'>
                                <h3>Easy to Use</h3>
                                <p>Simple, clean interface for all experience levels..</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="middle-col">
                    <img src={webTech} alt="" />
                </div> */}
                <div className='right-col'>
                    <div className="feature-container">
                        <div className='inner-feature'>
                            <i className="fa-solid fa-check"></i>
                            <div className='text-container'>
                                <h3>Accurate Data</h3>
                                <p>Trustworthy and reliable market data.</p>
                            </div>
                        </div>
                    </div>
                    <div className="feature-container">
                        <div className='inner-feature'>
                            <i className="fa-solid fa-newspaper"></i>
                            <div className='text-container'>
                                <h3>Crypto News</h3>
                                <p>Stay informed with the latest trends and updates.</p>
                            </div>
                        </div>
                    </div>
                    <div className="feature-container">
                        <div className='inner-feature'>
                            <i className="fa-solid fa-people-group"></i>
                            <div className='text-container'>
                                <h3>Community Driven</h3>
                                <p>Join a growing community of crypto enthusiasts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About