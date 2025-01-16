import { useEffect } from 'react';
import coinVault from '../assets/coin-vault.png';
import coinsBull from '../assets/coins-bull.png';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            const backToTopButton = document.querySelector('.back-to-top');
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="inner-footer" id='footer'>
            <img className='width' src={coinVault} alt="picture of coin vault" />
            <div className='links-copyright'>
                <div className='links'>
                    <a href=""><i className="fa-brands fa-x-twitter"></i></a>
                    <a href=""><i className="fa-brands fa-discord"></i></a>
                    <a href=""><i className="fa-brands fa-telegram"></i></a>
                    <a href=""><i className="fa-brands fa-instagram"></i></a>
                </div>
                <p>Coinhouse © 2024. All Rights Reserved.</p>
                {/* below is the button to scroll to top  */}
                <button onClick={scrollToTop} className='back-to-top'><i className="fa-solid fa-circle-up"></i></button>
            </div>
            <img className='width' src={coinsBull} alt="picture of stacked coins" />
        </div>
    );
}

export default Footer;
