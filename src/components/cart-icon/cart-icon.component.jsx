import React from 'react'; 
import './cart-icon.styles.scss'; 
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"; 
import { connect } from 'react-redux'; 
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from "../../redux/cart/cart.selector";

const CartIcon = (props) => (
    <div className='cart-icon' onClick={props.toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className="item-count">{props.itemCount}</span>
    </div>
);

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);