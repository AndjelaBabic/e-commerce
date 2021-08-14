import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils"; 
import { connect } from 'react-redux';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from 'reselect'; 

const Header = ({currentUser, toggleCartHidden}) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {
        currentUser ? 
        <div className='option' onClick={() => auth.signOut()}> SIGN OUT </div> : 
        <Link className="option" to="/signin"> SIGN IN </Link> 
      }
      <CartIcon />
    </div>
    { !toggleCartHidden ? <CartDropdown /> : null }
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser, 
  toggleCartHidden: selectCartHidden
})

export default connect(mapStateToProps)(Header); 
