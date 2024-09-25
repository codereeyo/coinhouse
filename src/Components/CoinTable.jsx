import React, {useState, useEffect} from "react";

function CoinTable(){

    const [coinData, setCoinData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [coinsPerPage] = useState(10);

    const options = {method: 'GET', headers: {accept: 'application/json'}};

    useEffect(function(){
        fetch('https://api.coingecko.com/api/v3/coins/markets?x_cg_api_key=CG-gMBDhZ2unSP3KBj1wbbZ6XES&vs_currency=usd&order=market_cap_desc&per_page=50', options)
        .then(function(response){
            if(!response.ok){
                throw new Error('Network response was not okay');
            }
            return response.json();
        })
        .then(function(data){
            console.log(data);
            setCoinData(data);
        })
        .catch(function(error){
            console.error('Error fetching coin data:', error);
        });
    }, []);

    const indexLastCoin = currentPage * coinsPerPage;
    const indexFirstCoin = indexLastCoin - coinsPerPage;
    const currentCoins = coinData.slice(indexFirstCoin, indexLastCoin);

    const totalPages = Math.ceil(coinData.length/coinsPerPage);

    function paginate(pageNumber){
        setCurrentPage(pageNumber);
    }

    return (
        <div className="inner-table">
            <table>
                <thead>
                    <tr>
                        <td>Coin</td>
                        <td>Market Cap</td>
                        <td>24h Change</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody id="data-results">
                    {currentCoins.map(function(coin){
                        return (
                            <tr className="data-container" key={coin.id}>
                                <td className="coin-name"><img src={coin.image} alt="" /> {coin.name}</td>
                                <td className="coin-mc">{'$' + coin.market_cap.toLocaleString()}</td>
                                <td className="coin-hour-change" style={{color: coin.price_change_percentage_24h >= 0 ? '#7CFC00' : 'red'}}>{coin.price_change_percentage_24h.toFixed(2) + '%'}</td>
                                <td className="coin-price">{'$' + coin.current_price.toLocaleString()}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="pagination">
                {Array.from({ length: totalPages }, function(_, i) {
                    return i + 1;
                    }).map(function(page) {
                        return (
                        <button key={page}
                            onClick={function() { paginate(page); }}
                            className={page === currentPage ? "active" : ""}
                        >
                            {page}
                        </button>
                        );
                })}
            </div>
        </div>
    )
}

export default CoinTable    