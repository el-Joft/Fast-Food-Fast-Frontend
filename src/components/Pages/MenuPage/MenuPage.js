/* eslint-disable import/no-named-as-default */
import React from 'react';
import Card from '../../UI/Card/Card';

export const MenuPage = () => (
  <div>
    <section className="container">
      <div className="menu-banner">
        <div>
          <div className="banner-text">
            <h2>Available Menu</h2>
            <p>Learn about our dishes</p>
          </div>
        </div>
      </div>
    </section>
    <Card />
  </div>
);

export default MenuPage;
