/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import telephone from '../../../public/images/icons/telephone.png';
import logoIcon from '../../../public/images/fast-food-fast.png';
import facebook from '../../../public/images/icons/facebook.png';
import twitter from '../../../public/images/icons/twitter.png';
import instagram from '../../../public/images/icons/instagram.png';
import google from '../../../public/images/icons/google.png';
import './header.scss';

const Header = () => {
  const logo = () => (
    <div className='logo'>
      <Link to='/'>
        <img src={logoIcon} alt="" />
        <div className='logo-text'><h2>Fast Food Fast</h2></div>
      </Link>
    </div>
  );

  const workingHours = () => (
    <div className="working-hours">
      <img className="icons-telephone" src={telephone} alt="" />
      <address className="contact-info">
        <Link to='callto:#' className="phone">+234-80502000</Link>
        <br />
        <span className="">Mon – Sat: 9:00–18:00</span>
      </address>
    </div>
  );

  const socialItem = [
    {
      link: '/facebook',
      src: facebook,
      alt: 'facebook',
    },
    {
      link: '/twitter',
      src: twitter,
      alt: 'twitter',
    },
    {
      link: '/instagram',
      src: instagram,
      alt: 'instagram',
    },
    {
      link: '/google',
      src: { google },
      alt: 'google',
    },
  ];
  const socialMedia = () => socialItem.map((item, i) => (
    <li key={i}>
      <Link to={item.link}>
        <img src={item.src} alt='item.alt' />
      </Link>
    </li>
  ));
  return (
    <div>
      <div className='header-1'>
        {logo()}
        {workingHours()}
        <div className="social">
          <ul>
            {socialMedia()}
          </ul>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
