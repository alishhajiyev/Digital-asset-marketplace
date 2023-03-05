import React from 'react'
import './MainPage.css'


export default function MainPage() {
  return (
    <div id='MainPage'>
      <h1>Buy, trade, and donate cryptocurrencies on CryptoCell</h1>
      <div className="MainPage-crypto-block">
        <div><i class="fa-brands fa-bitcoin"></i>Bitcoin BTC <br /><span style={{color:"red"}}>$22,329</span> </div>
        <div><i class="fa-brands fa-ethereum"></i>Ethereum ETH <br /> $1.586</div>
        <div><i class="fa-solid fa-t"></i>Tether USDT <br /> $1.00</div>
        <div><i class="fa-solid fa-earth-americas"></i>Binance Coin BNB <br />$289.10</div>
      </div>
    </div>
  )
}
