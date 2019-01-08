import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './header.scss';

const Header = () => {
  const logo = () => {
    return <div className='logo'>
      <Link to='/'>
        <img src='/public/images/fast-food-fast.png' alt=""/>
        <div className='logo-text'><h2>Fast Food Fast</h2></div>
      </Link>
    </div>
  } 

  const workingHours = () => {
    return <div className="working-hours">
    <img className="icons-telephone" src="/public/images/icons/telephone.png" alt="" />
    <address className="contact-info">
        <Link to='callto:#' className="phone">+234-80502000</Link><br/>
        <span className="">Mon – Sat: 9:00–18:00</span>
    </address>
</div>
  }

const socialItem = [
  {
    link: '/facebook',
    src: '/public/images/icons/facebook.png',
    alt: 'facebook',
  },
  {
    link: '/twitter',
    src: '/public/images/icons/twitter.png',
    alt: 'twitter',
  },
  {
    link: '/instagram',
    src: '/public/images/icons/instagram.png',
    alt: 'instagram',
  },
  {
    link: '/google',
    src: '/public/images/icons/google.png',
    alt: 'google',
  },

]
const socialMedia = () => socialItem.map((item, i) => 
  <li key={i}>
  <Link to={item.link}>
    <img src={item.src} alt='item.alt'/>
  </Link>
</li>     
)
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
  )
}

export default Header;