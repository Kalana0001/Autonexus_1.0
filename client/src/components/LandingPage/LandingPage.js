import React from 'react'
import './LandingPage.css';
import img1 from '../../assets/header.png';
import img2 from '../../assets/car_img02.png';
import img6 from '../../assets/car_png05.png';
import img3 from '../../assets/play.png';
import img4 from '../../assets/store.jpg';
import { Navbar_Landing } from '../Navbar_Landing/Navbar_Landing';
export const LandingPage = () => {
  return (
    <div className='landingPage'>
      <Navbar_Landing/>
      <div class="landingPage_container landingheader_container" id="home">
        <div class="landingheader_image">
          <img className='landing_img' src={img6} alt="header" />
        </div>
        <div class="landingheader_content">
          <h1 className='landing_h1'>Where Every Journey Becomes Unforgettable!</h1>
          <p className='landing_p'>
            Drive with Ease, Embrace the Road Ahead!
          </p>
          <div class="landingheader_links">
            <a className='landing_a ' href="#">
              <img className='landing_img' src={img3} alt="app store" />
            </a>
            <a className='landing_a ' href="#">
              <img className='landing_img' src={img4} alt="play" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
