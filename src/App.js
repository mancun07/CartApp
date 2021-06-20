import {useEffect, Fragment} from 'react'
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux'
import { updateDataToDB, fetchDataFromDB } from './store/cart-actions';
import Notification from './components/UI/Notification'

let initialLoading = true;

function App() {
  const cartIsShown = useSelector(state => state.ui.cartIsShown)
  const cart = useSelector(state => state.cart)
  const changed = useSelector(state => state.cart.changed)
  const notification = useSelector(state => state.ui.notification)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(fetchDataFromDB())
      console.log('GET request is executed')
  }, [dispatch])

  useEffect(() => {

    if (initialLoading) {
      initialLoading = false;
      return;
    }

    if(changed) {
      dispatch(updateDataToDB(cart))
      console.log('POST request is executed')
    }

  }, [cart, dispatch])

  return (
    <Fragment>
    {notification && <Notification status={notification.status} title={notification.title}
    message={notification.message}/>}
    <Layout>
      {cartIsShown && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
