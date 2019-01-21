import React, { Component } from 'react';
import './UserDashboardPage.scss';
import { connect } from 'react-redux';
import { getOrders } from '../../../actions/orderAction';

class UserDashboardPage extends Component {
  state = {}

  componentWillMount() {
    const token = localStorage.getItem('userToken');
    const { id } = this.props.auth.user;
    this.props.getOrders(token, id);
  }


  renderCard = () => this.props.orders.map((item, key) => (


    <div key={key} className="history-body">

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
      {/* <div className="history-item history-date">
        <h3>Date</h3>
        <p>24/5/2018</p>
      </div>
      <div className="history-item history-time">
        <h3>Time</h3>
        <p>12:45pm</p>
      </div> */}
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

const mapStateToProps = state => ({
  auth: state.auth,
  orders: state.orders.orders,
});

export default connect(mapStateToProps, { getOrders })(UserDashboardPage);
