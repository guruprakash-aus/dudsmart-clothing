import React from 'react';
import SignIn from '../../components/Authentication/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import './Authentication.styles.scss'

const Authentication = () => {
  return (
    <div className='authentication'>
        <SignIn />
        <SignUp />
    </div>);
};

export default Authentication;
