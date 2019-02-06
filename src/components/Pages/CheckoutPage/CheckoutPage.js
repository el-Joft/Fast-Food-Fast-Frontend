/* eslint-disable react/destructuring-assignment,react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './CheckoutPage.scss';
import { Link } from 'react-router-dom';
import { changeQuantity, checkoutOrder } from '../../../actions/orderAction';


export class CheckoutPage extends Component {
  componentDidMount() {
    const { isAuthenticated } = this.props.auth;
    if (!isAuthenticated) {
      this.props.history.push('/login');
    }
  }

  submitData = (e) => {
    e.preventDefault();
    const { isAuthenticated, user } = this.props.auth;
    const { history } = this.props;
    if (isAuthenticated) {
      const submitValue = this.props.cart.map(item => ({ menuid: item.id, quantity: item.quantity, orderedby: user.id }));
      let value = null;
      const token = localStorage.getItem('userToken');
      if (submitValue.length > 1) {
        submitValue.map((data) => {
          value = {
            menuid: data.menuid,
            quantity: data.quantity,
            orderedby: user.id,
          };
          this.props.checkoutOrder(value, token, history);
        });
      } else {
        submitValue.map((data) => {
          value = {
            menuid: data.menuid,
            quantity: data.quantity,
            orderedby: user.id,
          };
        });
        this.props.checkoutOrder(value, token, history);
      }
    }
  };

  changeInput = (e, id) => {
    const value = Number(e.target.value);
    this.props.changeQuantity(id, value);
  };

  renderCart = () => this.props.cart.map(item => (
    <div key={item.id} className="checkout-header">
      <div className="checkout-item top-header">
        <h3>Item</h3>
        <p>
          {item.name}
          <input type="text" name="menuid" value={item.name} hidden />
        </p>
      </div>
      <div className="top-header checkout-quantity">
        <h3>Quantity</h3>
        <input
          type="number"
          min="1"
          max="100"
          value={item.quantity}
          onChange={e => this.changeInput(e, item.id)}
          onKeyDown={this.getTotal}
          className="checkout-input"
        />
      </div>
      <div className="top-header checkout-price">
        <h3>Price</h3>
        <p id="{item.price}">
          <strike>N</strike>
          {item.price}
        </p>
      </div>
      <div className="top-header checkout-subtotal">
        <h3>Sub-Total</h3>
        <p>
          <strike>N</strike>
          { item.quantity * item.price }
        </p>
      </div>
    </div>

  ));

  render() {
    const { isAuthenticated } = this.props.auth;
    const { cart } = this.props;
    return (
      <div>
        { cart
          ? (
            <div className="checkout">
              <form onSubmit={e => this.submitData(e)}>
                {this.renderCart()}
                <div className="top-button">
                  <button type="submit" className="cancel-order">
            Cancel Order
                    {' '}
                  </button>
                  { isAuthenticated
                    ? (
                      <button type="submit" className="complete-order ">
            Complete Order

                      </button>
                    )

                    : <button type="submit" className="complete-order" disabled><Link to='/login'> Login to continue</Link></button>
              }
                </div>
              </form>
            </div>
          )
          : (
            <div className='cart-empty'>
              <div>Your cart is currently empty</div>
              <a href='/menu'>go the menu ....</a>
            </div>
          )
        }
      </div>
    );
  }
}

CheckoutPage.propTypes = {
  auth: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
  checkoutOrder: PropTypes.func.isRequired,
  changeQuantity: PropTypes.func.isRequired,
  history: PropTypes.string.isRequired,
};


const mapStateToProps = state => ({
  auth: state.auth,
  cart: state.order.cart,
});

export default connect(mapStateToProps, { changeQuantity, checkoutOrder })(CheckoutPage);
