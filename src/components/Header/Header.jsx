import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/utils";
import "./Header.styles.scss";

const Header = ({currentUser}) => {
  console.log(currentUser)
  return (
    <div className="header">
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
        {
          currentUser ?
            <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
            : 
            <Link className="option" to="/authentication">SIGN IN</Link>
        }
      </div>
    </div>
  );
};

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

export default connect(mapStateToProps)(Header);
