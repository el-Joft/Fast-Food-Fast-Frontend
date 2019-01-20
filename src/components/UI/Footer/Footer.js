import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import { CURRENT_YEAR } from '../../../helpers/helpers';

const Footer = () => (
  <footer>
    <div className="footer footer-home">
      <div className="contact-form">
        <div className="contact-title">Contact Us</div>
        <form>
          <ul className="form-group">
            <li>
              <label>
Full Name :
                {' '}
                <span className="required">*</span>
              </label>
              <input type="text" name="text" className="form-control field-long" required />
            </li>
            <li>
              <label>
Email
                {' '}
                <span className="required">*</span>
              </label>
              <input type="email" name="email" className="form-control field-long" required />
            </li>
            <li>
              <label>
Your Message
                {' '}
                <span className="required">*</span>
              </label>
              <textarea name="message" id="message" rows="3" required="required" className="field-long field-textarea" />
            </li>
            <li>
              <button type="submit" className="button"><span>Send</span></button>
            </li>
          </ul>
        </form>
      </div>
      <div className="footer-navigation"><Link to="/admin">Admin?... click here</Link></div>
      <h5 className="footer-text">
&copy;
        {' '}
        <span id="year">{CURRENT_YEAR}</span>
        {' '}
Andela bootcamp project
        {' '}
      </h5>
    </div>
  </footer>
);

export default Footer;
