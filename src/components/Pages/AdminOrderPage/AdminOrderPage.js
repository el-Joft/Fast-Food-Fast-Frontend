import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAdminOrders, deleteAnOrder } from '../../../actions/orderAction';

class AdminOrderPage extends Component {
  componentWillMount() {
    const token = localStorage.getItem('userToken');
    this.props.getAdminOrders(token);
  }

  deleteOrder = (e, id) => {
    e.preventDefault();
    const token = localStorage.getItem('userToken');
    const { history } = this.props;
    this.props.deleteAnOrder(id, token, history);
  };

  renderCard = () => this.props.orders.map((item, i) => (
    <tbody key={i}>
      <tr>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>{item.price}</td>
        <td>{item.quantity}</td>
        <td>{item.firstname}</td>
        <td>{item.totalprice}</td>
        <td>
          <div className="">
            <button onClick={e => this.deleteOrder(e, item.id)} className='delete-order' type='submit'>Delete</button>
          </div>
        </td>
      </tr>
    </tbody>
  ))

  render() {
    return (
      <div>
        {
          this.props.success.status
            ? <div className='success'>Sucessfully deleted an order</div>
            : null
        }

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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  orders: state.orders.orders,
  success: state.success,
  errors: state.errors,
});

export default connect(mapStateToProps, { getAdminOrders, deleteAnOrder })(AdminOrderPage);
