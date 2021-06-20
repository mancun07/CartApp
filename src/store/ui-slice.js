import {createSlice} from '@reduxjs/toolkit'

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        cartIsShown: false,
        notification: false
    },
    reducers: {
        toggleCart(state, actions) {
            state.cartIsShown = !state.cartIsShown
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            }
        }
        }
    }
)

export const uiActions = uiSlice.actions;

export default uiSlice