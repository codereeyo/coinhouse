import coinVault from '../assets/coin-vault.png'
import coinsBull from '../assets/coins-bull.png'

function Footer(){
    return(
        <div className="inner-footer">
            <img className='width' src={coinVault} alt="picture of coin vault" />
            <div className='links-copyright'>
                <div className='links'>
                    <a href=""><i class="fa-brands fa-x-twitter"></i></a>
                    <a href=""><i class="fa-brands fa-discord"></i></a>
                    <a href=""><i class="fa-brands fa-telegram"></i></a>
                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                </div>
                <p>Coinhouse © 2024. All Rights Reserved.</p>
            </div>
            
            <img className='width' src={coinsBull} alt="picture of stacked coins" />
        </div>
    )
}

export default Footer