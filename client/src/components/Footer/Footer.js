import React from 'react';
import './Footer.css';
import img1 from '../../assets/download.png';
import img2 from '../../assets/apple.png';
import img3 from '../../assets/google.png';
import { FaTelegramPlane, FaFacebookF, FaTwitter, FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { ImLocation2 } from "react-icons/im";
import { MdOutlineAttachEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className='landing_footer'>
      <section className="download">
        <div className="footer_section download__container">
          <div className="download__content">
            <h2 className="footer_header">PREMIUM CAR RENTAL</h2>
            <div className="download__links">
              <a href="#">
                <img className='footer_img' src={img3} alt="Google Play Store" />
              </a>
              <a href="#">
                <img className='footer_img' src={img2} alt="Apple App Store" />
              </a>
            </div>
          </div>
          <div className="download__image">
            <img className='footer_img' src={img1} alt="Download" />
          </div>
        </div>
      </section>

      {/* Uncomment this section if you want to include the newsletter */}
      {/* <section className="news" id="contact">
        <div className="footer_section news__container">
          <h2 className="footer_header">Stay up to date on all the latest news.</h2>
          <form action="/">
            <input type="text" placeholder="Your email" />
            <button className="footer_btn">
              <i><FaTelegramPlane /></i>
            </button>
          </form>
        </div>
      </section> */}

      <footer className='landing_footer_u'>
        <div className="footer_section footer__container">

          <div className="footer__col">
            <h4>AUTONEXUS</h4>
            <ul className="footer__links">
              <li><a href="#"><p className='f_contact'>Seamless Rides</p></a></li>
              <li><a href="#"><p className='f_contact'>Expert Repairs</p></a></li>
              <li><a href="#"><p className='f_contact'>Easy Rentals</p></a></li>
              <li><a href="#"><p className='f_contact'>Convenient Garage Locations</p></a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Company</h4>
            <ul className="footer__links">
              <li><a href="#"><p className='f_contact'>About Us</p></a></li>
              <li><a href="#"><p className='f_contact'>Career</p></a></li>
              <li><a href="#"><p className='f_contact'>Press</p></a></li>
              <li><a href="#"><p className='f_contact'>Support</p></a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Contact</h4>
            <ul className="footer__links">
              <li>
                <div className="circle"><FaPhone className="fcontact_icon" /></div>
                <p className='fcontact'>+947 12 364 509</p>
              </li>
              <li>
                <div className="circle"><ImLocation2 className="fcontact_icon" /></div>
                <p className='fcontact'>N0: 123, Smagi Street, Galle.</p>
              </li>
              <li>
                <div className="circle"><MdOutlineAttachEmail className="fcontact_icon" /></div>
                <p className='fcontact'>Autonexus@gmail.com</p>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Follow Us</h4>
            <ul className="footer__socials">
              <li>
                <a href="#">
                  <div className="fcircle"><FaFacebookF /></div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="fcircle"><FaTwitter /></div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="fcircle"><SiGmail /></div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bar">
          Copyright © 2024 AUTONEXUS. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
