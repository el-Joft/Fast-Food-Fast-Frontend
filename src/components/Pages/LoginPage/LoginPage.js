/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../../actions/authActions';

import './LoginPage.scss';

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
  }

  componentDidMount () {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
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
    const loginDetails = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(loginDetails);
  };

  render() {
    return (
      <section>
        { this.state.errors === ''
          ? <div className='message' />
          : <div className='error_message'>{this.state.errors.message}</div>
      }
        <div>
          <form onSubmit={this.onSubmit}>
            <ul className="form-group">

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
Password
                  {' '}
                  <span className="required">*</span>
                </label>
                <input onChange={this.onChange} value={this.state.password} type="password" name="password" className="form-control field-long" required />
              </li>

              <li>
                <input type="submit" value="Submit" />
              </li>

            </ul>

          </form>
          <div className="text-form">
            <p>
Don't have an account?
              {' '}
              <Link to="/signupl">Register</Link>
            </p>
          </div>
        </div>

      </section>
    );
  }
}

LoginPage.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  // history: PropTypes.func.isRequired,
};

// we get values here using the this.props.errors/auth

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});


export default connect(mapStateToProps, { loginUser })(LoginPage);
