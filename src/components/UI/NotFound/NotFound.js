import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';


const NotFound = () => (
  <div className='notFound'>
    <Link className='link' to='/'>
      <h3 className='notfoundtext'>...go back Home...</h3>
    </Link>
  </div>
);
export default NotFound;
