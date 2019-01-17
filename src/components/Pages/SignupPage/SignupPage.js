/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './SignupPage.scss';
import { registerUser } from '../../../actions/authActions';

class SignupPage extends Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    city: '',
    zipcode: '',
    address: '',
    password: '',
    // confirmPassword: '',
    errors: {},
  }

  // this prevents the user from accessing the login page when authenticated
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }
  }

  // here we are checking if the component recieves a props
  // if it does then the props must contain the errors
  // if it does the it should set the state of errors to nextprops.errors
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      nextProps.history.push('/');
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      phone: this.state.phone,
      city: this.state.city,
      zipcode: this.state.zipcode,
      address: this.state.address,
      password: this.state.password,
      // confirmPassword: this.state.confirmPassword,
    };
    this.props.registerUser(newUser);
  };

  render() {
    const { user } = this.props.auth;
    return (
      <section>
        {user ? user.firstname : '' }
        { this.state.errors === ''
          ? <div className='message' />
          : <div className='error_message'>{this.state.errors.message}</div>
      }
        <div>
          <form onSubmit={this.onSubmit}>
            <ul className='form-group'>
              <li>
                <label>
Full Name
                  {' '}
                  <span className="required">*</span>
                </label>
                <input onChange={this.onChange} value={this.state.firstname} type="text" name="firstname" className="form-control field-divided" placeholder="First Name" />
&nbsp;
                <input onChange={this.onChange} value={this.state.lastname} type="text" name="lastname" className="form-control field-divided" placeholder="Last Name" />
              </li>
              <li>
                <label>
Email
                  {' '}
                  <span className="required">*</span>
                </label>
                <input onChange={this.onChange} value={this.state.email} type="email" name="email" className="form-control field-long" required />
              </li>
              <li>
                <label>
Phone
                  {' '}
                  <span className="required">*</span>
                </label>
                <input onChange={this.onChange} value={this.state.tphone} type="text" name="phone" className="form-control field-long" required />
              </li>
              <li>
                <label>
City
                  {' '}
                  <span className="required">*</span>
                </label>
                <input onChange={this.onChange} value={this.state.city} type="text" name="city" className="form-control field-long" required />
              </li>
              <li>
                <label>
Zip Code
                  {' '}
                  <span className="required">*</span>
                </label>
                <input onChange={this.onChange} value={this.state.zipcode} type="number" name="zipcode" className="form-control field-long" required />
              </li>
              <li>
                <label>
Address
                  {' '}
                  <span className="required">*</span>
                </label>
                <textarea onChange={this.onChange} value={this.state.address} name="address" id="address" rows="3" required="required" className="field-long field-textarea" />
              </li>
              <li>
                <label>
Password
                  {' '}
                  <span className="required">*</span>
                </label>
                <input onChange={this.onChange} value={this.state.password} type="password" name="password" className="form-control field-long" required />
              </li>
              {/* <li>
                <label>
Confirm Password
                  {' '}
                  <span className="required">*</span>
                </label>
                <input onChange={this.onChange} value={this.state.confirmPassword} type="password" name="confirmPassword" className="form-control field-long" required />
              </li> */}

              <li>
                <input type="submit" value="Submit" />
              </li>
            </ul>
          </form>
          <div className="text-form">
            <p>
              Already have an account?
              {' '}
              <a href="signin.html">Login</a>
            </p>
          </div>
        </div>

      </section>
    );
  }
}

SignupPage.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

// we get values here using the this.props.errors/auth

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(SignupPage));
