import React from "react";
import charityphoto from "./charityphoto.png";
import donate from "./donate.png";
import donate1 from "./donate1.png";
import donate2 from "./donate2.png";
import "./Charity.css";

export default function Charity() {
  return (
    <div className="container">
      <div className="flex-container">
        <p className="about">
          For the audience, you’ll need to create a buzz on socials or through
          other marketing and pick a platform, such as eBay for Charity, Donate,
          or Givergy. Then you just need to find something to sell and pick the
          right price, perhaps asking stakeholders or volunteers or donors.
          Think outside the box. You do not simply have to sell some really nice
          TV, or a bracelet, or other typical items that people could buy
          themselves. Choose instead experience days, funny items, and
          sentimental items.
        </p>
        <img src={charityphoto} alt="Donation photo"></img>
      </div>
      <div className="hero-cards">
        <h1>Donations</h1>
        <div className="all-card">
          <div className="cards">
            <img className="images" src={donate} alt="helpukranie"></img>
            <div className="overlay">
            <p className="about-donations">
              As part of the programme, CryptoCell Charity is working with
              various non-profit organizations including Rotary Club Kyiv
              International and Palianytsia to provide crypto-based cash
              assistance through the Refugee Crypto Card that will allow
              relatives or acquaintances to transfer crypto to the new cards and
              CryptoCell wallets to support their loved ones.
            </p></div>
            <div className="make-a-donation">
              <p className="datetime">05.01.2023</p>
              <button className="btn">Make a donation</button>
            </div>
          </div>
          <div className="cards">
            <img className="images" src={donate1} alt="helpturkey"></img>
            <div className="overlay">
            <p className="about-donations">
              Identification of the users will be based on Proof of Address
              (POA) completed before Feb 6th in 10 cities where the earthquake
              has had significant impact, including: Kahramanmaraş, Kilis,
              Diyarbakır, Adana, Osmaniye, Gaziantep, Şanlıurfa, Adıyaman,
              Malatya and Hatay. While the POA method has its limitations and
              inaccuracies, it is the best method we have available for us to
              locate potentially impacted users. We estimate the total donations
              will be around $5 million USD (or 94,000,000 TRY).
            </p>
            </div>
            <div className="make-a-donation">
              <p className="datetime">27.02.2023</p>
              <button className="btn">Make a donation</button>
            </div>
          </div>
          <div className="cards">
            <img className="images" src={donate2} alt="helpturkey"></img>
            <div className="overlay">
            <p className="about-donations">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Cupiditate esse possimus optio dolore architecto tempora et
              mollitia vero debitis, quaerat unde rem laborum qui. Optio
              deserunt molestias nemo, id aut, voluptatem autem, facere eius
              vero debitis voluptatum animi nisi vel temporibus quasi explicabo.
              Nisi dolore unde aperiam quasi, ducimus adipisci blanditiis eius
              dolor sequi sed dolorem veritatis iusto tempora minus!
            </p>
            </div>
            <div className="make-a-donation">
              <p className="datetime">27.02.2023</p>
              <button className="btn">Make a donation</button>
            </div>
          </div>
          {/* <div className="cards">
            <img className="images"  src={donate} alt="helpturkey"></img>
            <p className="about-donations">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam impedit placeat voluptas a esse sapiente rem maiores
              veritatis odit, culpa animi illo pariatur quas iste ex facere enim
              sed explicabo ullam quos cumque quae consequuntur cum. Eum ullam
              dignissimos dicta recusandae et ratione, ex, inventore, maiores
              voluptate officiis hic quos.
            </p>
            <div className="make-a-donation">
              <p className="datetime">03.03.2023</p>
              <button className="btn">Make a donation</button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
