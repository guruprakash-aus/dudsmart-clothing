import React from "react";

import './homepage.styles.scss';

const HomePage = () => {
  return (
    <div className='hoempage'>
      <div className='directory-menu'>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>HATS</h1>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>JACKETS</h1>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>WOMENS</h1>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>MENS</h1>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
      </div>
      {/* <h1>Home Page</h1> */}
    </div>
  );
};

export default HomePage;
