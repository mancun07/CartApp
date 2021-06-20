import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalAmount: 0,
        changed: false
    },
    reducers: {
        replaceDataInRedux(state, action) {
            state.items = action.payload.items;
            state.totalQuantity = action.payload.totalQuantity;
            state. totalAmount = action.payload. totalAmount;
        },
        addItemToRedux(state, action) {
            const newItem = action.payload
            const existingItem = state.items.find(item => item.id === newItem.id)
            state.totalQuantity++;
            state.totalAmount = state.totalAmount + newItem.price
            state.changed = true;
            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + action.payload.price
            } else {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    quantity: newItem.quantity,
                    price: newItem.price,
                    totalPrice: newItem.price
                })
            }
        },
        removeItemFromRedux(state, action) {
            const id = action.payload
            const exisitingItem = state.items.find(item => item.id === id)
            state.totalQuantity--;
            state.totalAmount = state.totalAmount - exisitingItem.price;
            state.changed = true;
            if (exisitingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id)
            } else {
                exisitingItem.quantity--;
                exisitingItem.totalPrice = exisitingItem.totalPrice - exisitingItem.price
            }
        }
    }
})

export const cartActions = cartSlice.actions

export default cartSlice