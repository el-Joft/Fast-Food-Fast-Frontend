/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllMenus } from '../../../actions/getMenusAction';
import { addCart } from '../../../actions/orderAction';


class Card extends Component {
  componentDidMount() {
    this.props.getAllMenus();
  }

  addToCart(menuData) {
    const item = Object.assign({}, menuData, { quantity: 1 });
    this.props.addCart(item);
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
            <div to="/checkout">
              {' '}
              <span
                role="searchbox"
                onKeyPress={() => this.addToCart(item)}
                onClick={menuData => this.addToCart(item)}
                tabIndex="-1"
                className="menu-order"
              >
                Make Order
              </span>
            </div>
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
  addCart: PropTypes.func.isRequired,
  menu: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

// we get values here using the this.props.errors/auth

const mapStateToProps = state => ({
  menu: state.menu,
  errors: state.errors,
  order: state.order,
});

export default connect(mapStateToProps, { getAllMenus, addCart })(Card);
