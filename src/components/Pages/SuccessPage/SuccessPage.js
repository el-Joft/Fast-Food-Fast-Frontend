import React from 'react';
import { Link } from 'react-router-dom';

export const SuccessPage = () => (
  <section>
    <div className="successful">
      <div>
        <img src="/src/public/images/good.jpg" alt="success" />
      </div>
      <div className="success-text">
        <h3>Successfully made an Order</h3>
        <p>
You can check your
          {' '}
          <Link to="/dashboard">dashboard</Link>
        </p>
      </div>
    </div>

  </section>
);

export default SuccessPage;
