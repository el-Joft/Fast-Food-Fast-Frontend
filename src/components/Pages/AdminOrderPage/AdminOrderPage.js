import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAdminOrders } from '../../../actions/orderAction';

class AdminOrderPage extends Component {
  componentWillMount() {
    const token = localStorage.getItem('userToken');
    this.props.getAdminOrders(token);
  }

  renderCard = () => this.props.orders.map(item => (
    <tbody>
      <tr>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>{item.price}</td>
        <td>{item.quantity}</td>
        <td>{item.firstname}</td>
        <td>{item.totalprice}</td>
        <td>
          <div className="btn-normal"><a href="edit_food.html">Accept</a></div>
          <div className="btn-danger"><a href="">Reject</a></div>
          <div className="complete-label">
            <label htmlFor="complete">Mark as complete</label>
            <input type="checkbox" name="complete" id="" />
          </div>
        </td>
      </tr>
    </tbody>
  ))

  render() {
    return (
      <table className="admin-table">
        <thead className="table-head">
          <tr>
            <th>Item</th>
            <th>Description</th>
            <th>
Price (
              <strike>N</strike>
)
            </th>
            <th>Qty</th>
            <th>User</th>
            <th>
Total (
              <strike>N</strike>
)
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        {
          this.props.orders === null
            ? null
            : this.renderCard()}
      </table>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  orders: state.orders.orders,
});

export default connect(mapStateToProps, { getAdminOrders })(AdminOrderPage);
