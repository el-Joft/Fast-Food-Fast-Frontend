import React from 'react';

const SuccessPage = () => (
  <section>
    <div className="successful">
      <div>
        <img src="/public/images/good.jpg" alt="success" />
      </div>
      <div className="success-text">
        <h3>Successfully made an Order</h3>
        <p>
You can check your
          {' '}
          <a href="user-dashboard.html">dashboard</a>
        </p>
      </div>
    </div>

  </section>
);

export default SuccessPage;
