/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import './NavItems.scss';
import { logoutUser } from '../../actions/authActions';
import { addCart } from '../../actions/orderAction';

const NavItem = (props) => {
  const { isAuthenticated, user } = props.auth;
  let showItems = [];
  const items = [
    {
      text: 'Menu',
      link: '/menu',
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
  const authenticated = [
    {
      text: 'Menu',
      link: '/menu',
    },
    {
      text: 'About Us',
      link: '/about',
    },
    {
      text: 'Welcome',
      link: '/dashboard',
    },
  ];

  const cart = () => {
    const cartItem = localStorage.getItem('cart');
    let cartLength = 0;
    if (cartItem) {
      const parsedItem = JSON.parse(cartItem);
      cartLength = parsedItem.length;
    }
    return cartLength;
  };

  if (isAuthenticated) {
    showItems = () => authenticated.map((item, i) => (
      <li key={i}>
        <Link
          to={item.link}
        >
          {item.text}
        </Link>
      </li>
    ));
  } else {
    showItems = () => items.map((item, i) => (
      <li key={i}>
        <Link to={item.link}>
          {item.text}
        </Link>
      </li>
    ));
  }

  const logoutClick = (e) => {
    e.preventDefault();
    props.logoutUser();
  };


  return (
    <div>
      <nav>
        <ul className="nav-bar">
          {showItems()}
          { isAuthenticated
            ? (
              <li>
                <Link
                  onClick={e => logoutClick(e)}
                  to='/logout'
                >
                  Logout
                </Link>
              </li>
            ) : ''
          }
          <li className="cart-section">
            <Link to="/checkout">
              <img src="/public/images/icons/cart.png" alt="" />
              <span>
Cart(
                {cart()}
)
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavItem.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  order: state.order,
});

export default connect(mapStateToProps, { logoutUser, addCart })(NavItem);
