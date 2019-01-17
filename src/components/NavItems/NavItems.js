import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import './NavItems.scss';
import { logoutUser } from '../../actions/authActions';


const NavItem = (props) => {
  const { isAuthenticated, user } = props.auth;
  let showItems = [];
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
  const authenticated = [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'About Us',
      link: '/about',
    },
    {
      text: 'Welcome',
      link: '/userdashboard',
    },
  ];


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

NavItem.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(NavItem);
