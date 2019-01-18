import React, { Component } from 'react';
import './CheckoutPage.scss';

class CheckoutPage extends Component {
  state = {

  }

  submitData = () => {
   
  }

  renderCart = () => {
    const getCart = localStorage.getItem('cart');
    const cart = JSON.parse(getCart);
    return cart.map(item => (
      <form key={item.id}>
        <div className="checkout-header">
          <div className="checkout-item top-header">
            <h3>Item</h3>
            <p>
              {item.name}
              <input type='text' name='menuid' value={item.id} hidden />
            </p>
          </div>
          <div className="top-header checkout-quantity">
            <h3>Quantity</h3>
            <input type="number" className="checkout-input" />
          </div>
          <div className="top-header checkout-price">
            <h3>Price</h3>
            <p>
              <strike>N</strike>
              <input type='text' name='price' value={item.price} hidden />
            </p>
          </div>
          <div className="top-header checkout-subtotal">
            <h3>Sub-Total</h3>
            <p>
              <strike>N</strike>
              {' '}
                3999.99
            </p>
          </div>
        </div>
      </form>
    ));
  }


  render() {
    return (
      <div className="checkout">
        { this.renderCart() }
        <div className="top-button">
          <button type='submit' className="cancel-order">Cancel Order </button>
          <button type='submit' onClick={this.submitData()} className="complete-order ">Complete Order </button>

        </div>
      </div>
    );
  }
}


export default CheckoutPage;
