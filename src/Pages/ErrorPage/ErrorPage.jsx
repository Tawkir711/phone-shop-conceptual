import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='h-screen flex justify-center  items-center'>
      <h1>page is not found</h1>
      <Link to={'/'}>
      <button>Back Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;