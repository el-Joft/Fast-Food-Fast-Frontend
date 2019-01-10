import React from 'react';
import { Link } from 'react-router-dom';
import './NavItems.scss';

const NavItem = () => {
  const items = [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'About Us',
      link: '/about',
    },
    {
      text: 'Login',
      link: '/login',
    },
    {
      text: 'Sign Up',
      link: '/signup',
    },
  ];

  const showItems = () => items.map((item, i) => (
    <li key={i}>
      <Link to={item.link}>
        {item.text}
      </Link>
    </li>
  ));

  return (
    <div>
      <nav>
        <ul className="nav-bar">
          {showItems()}
          <li className="cart-section">
            <a href="checkout.html">
              <img src="/public/images/icons/cart.png" alt="" />
              <span>
Cart(
                <span id="cartSystem" />
)
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavItem;
