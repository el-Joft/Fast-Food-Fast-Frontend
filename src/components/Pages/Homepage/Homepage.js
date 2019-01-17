/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import './HomePage.scss';
import { Link } from 'react-router-dom';
import Card from '../../UI/Card/Card';

class Homepage extends Component {
  state = {

  }

  render() {
    return (
      <div>
        <section className="container">
          <div className="banner" id="banner">
            <div>
              <div className="banner-text">
                <h2 className="home-banner">Fast Food Fast</h2>
                <p className="home-banner">
Welcome to Food Delivery, a place where you can order your favorite restaurant dishes, drinks,
                            and desserts at affordable price.
                            We are glad to offer you the best food in the area to everyone.

                </p>
              </div>

            </div>
          </div>
        </section>
        <div className="today-special">
          <p>
              TODAY'S SPECIAL :
            <span className="today-special-food"> Amala with Ewedu plus Goat Meat</span>
          </p>
        </div>
        <div className="menu">
          <div className="menu-text">
            <h3>Our Menu</h3>
            <p> "Our talented chefs prepare best meals for you"</p>
          </div>
          <Card />
          <div className="menu-text">
            <h3 className="full-menu"><Link to='/menu'>View Full Menu</Link></h3>
          </div>
        </div>
        <section className="info">
          <div className="info-text">
            <h3>FAST FOOD FAST</h3>
          </div>
          <div className="about-paragraph">
            <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, voluptates laborum blanditiis vitae
                    recusandae eaque ea ipsa magnam. Perspiciatis labore veniam recusandae excepturi
                    repellendus ea molestias est reprehenderit veritatis sequi.
            </p>

          </div>
        </section>
      </div>
    );
  }
}

export default Homepage;
