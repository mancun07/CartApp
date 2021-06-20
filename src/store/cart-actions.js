import { cartActions } from './cart-slice'
import {uiActions} from './ui-slice'


export const fetchDataFromDB = () => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const response = await fetch(`https://react-app3-da7ab-default-rtdb.firebaseio.com/cart.json`)
            if(!response.ok) {
                throw new Error('our custom error')
            }
            const data = await response.json();
            return data;
            console.log(data)
        }
        
        try {
            const dbData = await sendRequest();
            dispatch(cartActions.replaceDataInRedux({
                items: dbData.items,
                totalAmount: dbData.totalAmount,
                totalQuantity: dbData.totalQuantity
            }))
        } catch (err) {
            dispatch(uiActions.showNotification({
                title: 'error',
                status: 'error',
                message: 'GET request is failed'
            }))
        }
    }
}


export const updateDataToDB = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            title: 'pending',
            status: 'pending',
            message: 'POST request is pending'
        }))
        const sendRequest = async () => {
            const response = await fetch(`https://react-app3-da7ab-default-rtdb.firebaseio.com/cart.json`, {
                method: 'PUT',
                body: JSON.stringify(cart)
            })
            if (!response.ok) {
                throw new Error(' our custom error')
            }
            dispatch(uiActions.showNotification({
                title: 'pending',
                status: 'success',
                message: 'POST request is successful'
            }))
        }

        try {
            await sendRequest()
        } catch (err) {
            dispatch(uiActions.showNotification({
                title: 'error',
                status: 'error',
                message: 'POST request is failed'
            }))
        }
    }
}