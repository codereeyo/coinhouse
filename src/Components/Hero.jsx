import React, { useState, useEffect } from 'react';
import bitcoinIcon from '../assets/bitcoin-icon.png';
import ethIcon from '../assets/ethereum-icon.png';

function Hero() {
  const [cryptoData, setCryptoData] = useState([]);

  const options = {method: 'GET', headers: {accept: 'application/json'}};

  useEffect(function() {
    fetch('https://api.coingecko.com/api/v3/coins/markets?x_cg_api_key=CG-gMBDhZ2unSP3KBj1wbbZ6XES&vs_currency=usd&order=market_cap_desc&per_page=4', options)
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Network response was not okay');
        }
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        setCryptoData(data);
      })
      .catch(function(error) {
        console.error('Error fetching crypto data:', error);
      });
  }, []);

  return (
    <div className="inner-hero">
        <div className="hero-row1">
            <img className="btc-logo" src={bitcoinIcon} alt="Bitcoin logo" />
            <h1>TRACK YOUR BEST<br /><span className="crypto-projects">CRYPTO PROJECTS</span></h1>
            <img className="eth-logo" src={ethIcon} alt="Ethereum logo" />
        </div>

        <div id="hero-row2">
            {cryptoData.map(function(coin, index){
            return (
                <div className="token-container" key={coin.id}>
                    <img src={coin.image} alt={coin.name} />
                    <h3>{coin.name}{' '}<span style={{ color: coin.price_change_percentage_24h >= 0 ? '#7CFC00' : 'red' }}>{coin.price_change_percentage_24h.toFixed(2)}%</span></h3>
                    <p>${coin.current_price.toLocaleString()}</p>
                </div>
            );
            })}
        </div>
    </div>
  );
}

export default Hero;
