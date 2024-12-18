import React from 'react'
import './Page01.css';
import img1 from '../../assets/banner-1.png';
import img2 from '../../assets/banner-2.png';
import img3 from '../../assets/banner-3.png';
import img4 from '../../assets/banner-4.png';
import img5 from '../../assets/banner-5.png';
import img6 from '../../assets/banner-6.png';
import img7 from '../../assets/banner-7.png';
import img8 from '../../assets/banner-8.png';
import img9 from '../../assets/banner-9.png';
import img10 from '../../assets/banner-10.png';
import img11 from '../../assets/story-1.jpg';
import img12 from '../../assets/story-2.jpg';
import img13 from '../../assets/story-3.jpg';
const Page01 = () => {
  return (
    <div className='page01'>
    <section class="page1_container story__container">
      <h2 class="page01_header">STORIES BEHIND THE WHEEL</h2>
      <div class="story__grid">
        <div class="story__card">
          <div class="story__date">
            <span>12</span>
            <div>
              <p>January</p>
              <p>2024</p>
            </div>
          </div>
          <h4>Adventures on the Open Road</h4>
          <p>
            Join us as we dive into the exhilarating stories of travelers who
            embarked on unforgettable journeys with PREMIUM CAR RENTAL.
          </p>
          <img className='page01_img' src={img11} alt="story" />
        </div>
        <div class="story__card">
          <div class="story__date">
            <span>04</span>
            <div>
              <p>March</p>
              <p>2024</p>
            </div>
          </div>
          <h4>Luxury and Comfort: Experiences</h4>
          <p>
            In this series, we highlight the luxurious touches, unparalleled
            comfort, and exceptional service that make every ride.
          </p>
          <img className='page01_img' src={img12} alt="story" />
        </div>
        <div class="story__card">
          <div class="story__date">
            <span>18</span>
            <div>
              <p>June</p>
              <p>2024</p>
            </div>
          </div>
          <h4>Cars that Adapt to Your Lifestyle</h4>
          <p>
            Read about how our versatile vehicles have seamlessly integrated
            into the lives of professionals and families alike.
          </p>
          <img className='page01_img' src={img13} alt="story" />
        </div>
      </div>
    </section>

    <section class="banner__container">
      <div class="banner__wrapper">
        <img className='page01_img1' src={img1}alt="banner" />
        <img className='page01_img1' src={img2}alt="banner" />
        <img className='page01_img1' src={img3}alt="banner" />
        <img className='page01_img1' src={img4}alt="banner" />
        <img className='page01_img1' src={img5}alt="banner" />
        <img className='page01_img1' src={img6}alt="banner" />
        <img className='page01_img1' src={img7}alt="banner" />
        <img className='page01_img1' src={img8}alt="banner" />
        <img className='page01_img1' src={img9}alt="banner" />
        <img className='page01_img1' src={img10}alt="banner" />
        <img className='page01_img1' src={img10}alt="banner" />
        <img className='page01_img1' src={img10}alt="banner" />
      </div>
    </section>
    </div>
  )
}

export default Page01