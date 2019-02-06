/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/forbid-prop-types,react/require-default-props */
import React, { Component } from 'react';
import './UserDashboardPage.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getOrders } from '../../../actions/orderAction';

export class UserDashboardPage extends Component {
  componentWillMount() {
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated) {
      const token = localStorage.getItem('userToken');
      const { id } = this.props.auth.user;
      this.props.getOrders(token, id);
    } else {
      this.props.history.push('/login');
    }
  }


  renderCard = () => this.props.orders.map(item => (


    <div key={item.id} className="history-body">

      <div className="history-item item">

        <h3>Item</h3>
        <div>
          <h2>{item.name}</h2>
          <p>
            {item.description}
          </p>
        </div>

      </div>
      <div className="history-item history-quantity">
        <h3>Quantity</h3>
        <p>{item.quantity}</p>
      </div>
      <div className="history-item history-price">
        <h3>Price</h3>
        <p>
          <strike>N</strike>
          {item.price}
        </p>
      </div>
      <div className="history-item history-total">
        <h3>Total</h3>
        <p>
          <strike>N</strike>
          {' '}
          {item.totalprice}
        </p>
      </div>
    </div>

  ));

  render() {
    return (
      <div>
        {
          this.props.orders === null
            ? null
            : (
              <div className="history">
                <div className="history-head-text">
                  <h3>YOUR ORDER HISTORY</h3>
                </div>
                {this.renderCard()}
              </div>
            )
        }
      </div>
    );
  }
}

UserDashboardPage.propTypes = {
  getOrders: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  orders: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired,
  history: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  orders: state.orders.orders,
});

export default connect(mapStateToProps, { getOrders })(UserDashboardPage);
