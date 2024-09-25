import bitcoinIcon from '../assets/bitcoin-icon.png';
import ethIcon from '../assets/ethereum-icon.png';

function Connect(){
    return(
        <div className="inner-connect">
            <div className='connect-row1'>
                <img className="btc-logo" src={bitcoinIcon} alt="Bitcoin logo" />
                <h2>CONNECT ON <br /><span>OUR SOCIALS</span></h2>
                <img className="eth-logo" src={ethIcon} alt="Ethereum logo" />
            </div>
            <p>Share and explore your crypto journey 🌐</p>
            <button>Get Started</button>
        </div>
    )
}

export default Connect