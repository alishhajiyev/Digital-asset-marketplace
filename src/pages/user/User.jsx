import React from "react";
import userphoto from "./userphoto.png";
import "./User.css";
import { useSelector } from "react-redux";
export default function () {
  const count = useSelector((state) => {
    // console.log(state)
    return state.counter.value;
  });
  return (
    <div>
      
      <h1>{count}</h1>
      <div className="user-container">
        <div className="container">
          <div>
            <img className="pp-user" src={userphoto}></img>
          </div>
          <div className="user-info">
            <h3 className="user-name">UserName</h3>
            <div style={{ color: "orange" }}>
              <i className="fa-brands fa-bitcoin"></i>Bitcoin BTC <br />
            </div>
            <div style={{ color: "blue" }}>
              <i className="fa-brands fa-ethereum"></i>Ethereum ETH <br />
            </div>
            <div style={{ color: "green" }}>
              <i className="fa-solid fa-t"></i>Tether USDT <br />
            </div>
            <div style={{ color: " rgb(251, 198, 66)" }}>
              <i className="fa-solid fa-earth-americas"></i>Binance Coin BNB{" "}
              <br />
            </div>
            <div className="btns">
              <button className="btn-reset">Reset</button>
              {/* <button className='btn-increase'></button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
