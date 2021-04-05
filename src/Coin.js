import React from 'react'
import './Coin.css'
function Coin ({name, image , symbol,price, volume, priceChange, marketcap}){

    function priceChg(priceChange){
        priceChange = priceChange.toFixed(2);
        if(priceChange < 0){
            return(
                <p className="coin-percent red">{priceChange}</p>
            )
        }else{
            return(
                <p className="coin-percent green">{priceChange}</p>
            )
        }
    }


    return(
        <div className = 'coin-container'>
            <div className = "coin-row">
                <div className = "coin">
                    <img src={image} alt="crypto"></img>
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">${price.toLocaleString()}</p>
                    <p className="coin-volume">${volume}</p>
                    {priceChg(priceChange)}
                    <p className="coin-Marketcap">Mkt Cap:{marketcap.toLocaleString()}</p>
                </div>
            </div>

        </div>
    )
}

export default Coin