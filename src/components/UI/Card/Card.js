/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllMenus } from '../../../actions/getMenusAction';


class Card extends Component {
  state = {

  }

  componentDidMount() {
    this.props.getAllMenus();
  }

  renderCard = () => {
    const { menu } = this.props;
    if (menu.menu !== null) {
      return menu.menu.map(item => (
        <div key={item.id} className='menu-section'>
          <div className="menu-food">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
          <div className="menu-price">
            <p>
              <strike>N</strike>
              {item.price}
            </p>
            <a href="checkout.html">
              {' '}
              <span className="menu-order">Make Order</span>
            </a>
          </div>

        </div>
      ));
    }
  }

  render() {
    return (
      <div className="menu-body">
        {this.renderCard()}
      </div>
    );
  }
}

Card.propTypes = {
  getAllMenus: PropTypes.func.isRequired,
  menu: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

// we get values here using the this.props.errors/auth

const mapStateToProps = state => ({
  menu: state.menu,
  errors: state.errors,
});

export default connect(mapStateToProps, { getAllMenus })(Card);
