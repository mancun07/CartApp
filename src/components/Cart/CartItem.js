import classes from './CartItem.module.css';
import {useDispatch} from 'react-redux'
import { cartActions } from '../../store/cart-slice';

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props;
  const dispatch = useDispatch()

  const addItemToReduxHandler = () => {
      dispatch(cartActions.addItemToRedux({
          id,
          price,
          title,
          quantity: 1
      }))
  }

  const removeItemFromReduxHandler = () => {
    dispatch(cartActions.removeItemFromRedux(id))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemFromReduxHandler}>-</button>
          <button onClick={addItemToReduxHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
