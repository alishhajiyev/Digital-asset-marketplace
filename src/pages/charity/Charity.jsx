import React from "react";
import donate from "./donate.png";
import donate1 from "./donate1.png";
import donate2 from "./donate2.png";
import "./Charity.css";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export default function Charity() {
 
function handleClick() {
  const MySwal = withReactContent(Swal)
  MySwal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, donate it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Donated!',
        'Thank for your help.',
        'success'
      )
    }
  })
}
  return (
    <div className="container">
      <div className="flex-container">
        <p className="about">
          <p>MAKE SOMEBODY'S LIFE BETTER TO LIVE BETTER </p >
          <br></br>
          <br></br>
          For the audience, you’ll need to create a buzz on socials or through
          other marketing and pick a platform, such as eBay for Charity, Donate,
          or Givergy. Then you just need to find something to sell and pick the
          right price, perhaps asking stakeholders or volunteers or donors.
          Think outside the box. You do not simply have to sell some really nice
          TV, or a bracelet, or other typical items that people could buy
          themselves. Choose instead experience days, funny items, and
          sentimental items.
        </p>
      </div>
      <div className="hero-cards">
        <h1>Donations</h1>
        <div className="all-card">
          <div className="cards">
            <img className="images" src={donate} alt="helpukranie"></img>
            <div className="overlay">
              <p className="about-donations">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                eligendi minus ipsa magni laboriosam repudiandae consequatur at
                delectus, quo aliquam, qui molestias iure explicabo ut
                accusantium. Aliquid quaerat sed possimus libero quidem fugit
                minima accusamus numquam nisi inventore voluptatem ex n
              </p>
            </div>
            <div className="make-a-donation">
              <p className="datetime">05.01.2023</p>
              <div className="all-btn">
                <button className="btn-hidden">Make a donation</button>
                <button onClick={handleClick} className="btn-visible">10USDT</button>
              </div>
            </div>
          </div>
          <div className="cards">
            <img className="images" src={donate1} alt="helpturkey"></img>
            <div className="overlay">
              <p className="about-donations">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                tenetur, voluptate dolores magnam autem sequi eaque officiis
                minima dolore mollitia labore id quidem vitae numquam molestias
                assumenda sapiente 
               
              </p>
            </div>
            <div className="make-a-donation">
              <p className="datetime">27.02.2023</p>
              <div className="all-btn">
                <button className="btn-hidden">Make a donation</button>
                <button onClick={handleClick} className="btn-visible">10USDT</button>
              </div>
            </div>
          </div>
          <div className="cards">
            <img className="images" src={donate2} alt="helpturkey"></img>
            <div className="overlay">
              <p className="about-donations">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi hic maiores numquam veritatis, fuga velit eos
                distinctio molestiae illo? Consequatur fugiat libero non! Illum
                nostrum, vel doloremque ipsam neque minima expedita perferendis
                id totam distinctio nulla, pariatur, aliquid aut. 
              </p>
            </div>
            <div className="make-a-donation">
              <p className="datetime">02.03.2023</p>
              <div className="all-btn">
                <button className="btn-hidden">Make a donation</button>
                <button onClick={handleClick} className="btn-visible">10USDT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
