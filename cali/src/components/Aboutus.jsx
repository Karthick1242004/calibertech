import React from 'react';
import Ao from './About.module.css';
import { Link } from 'react-router-dom';

function Aboutus() {
  return (
    <div className={Ao.back}>
        <h1 className={Ao.hh1}>Welcome to Caliber Tech!</h1>
        <p className={Ao.pp}>
          About Caliber Tech<br/>
          Welcome to Caliber Tech, your trusted partner in crafting exceptional web solutions tailored to meet your unique needs. At Caliber Tech, we believe in the power of technology to transform businesses, big or small. Our mission is to empower small-scale shops and vendors by providing them with affordable, high-quality web applications and technical support services.<br/><br/>
          With a passion for innovation and a commitment to excellence, we specialize in developing web pages that elevate your online presence and drive growth. Whether you're a budding entrepreneur or an established business, we have the expertise to create personalized web solutions that resonate with your target audience.<br/><br/>
          Our services extend beyond just web development. We understand that maintaining your digital presence is essential for staying competitive in today's fast-paced market. That's why we offer comprehensive technical support and maintenance services to ensure that your applications run smoothly at all times.<br/><br/>
          At Caliber Tech, customer satisfaction is our top priority. We take pride in offering transparent and reliable services that you can count on. With competitive pricing and flexible packages, we make it easy for you to access top-notch web solutions without breaking the bank.<br/><br/>
          Our portfolio speaks for itself. From single-page portfolio websites to multi-page business and commercial sites, we have the expertise to bring your vision to life. With our customer-centric approach, we strive to exceed your expectations every step of the way.<br/><br/>
          Join us on this journey of innovation and success. Explore our website to learn more about our services and how we can help you achieve your goals. At Caliber Tech, your success is our success.<br/><br/>
          Unlock the potential of the digital world with Caliber Tech. Contact us today to get started!<br/><br/>
        </p>
        <div className={Ao.bt}>
            <Link to='/' className={Ao.lk}>Back To Home</Link>
        </div>
    </div>
  )
}

export default Aboutus;