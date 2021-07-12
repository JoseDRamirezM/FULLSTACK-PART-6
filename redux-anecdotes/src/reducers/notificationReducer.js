const initialState = null

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return action.notification
        case 'REMOVE_NOTIFICATION':
            return initialState
        default: return state
    }
}

export const set_notification = (notification, time) => {
    return async dispatch => {
        dispatch({
            type: 'SET_NOTIFICATION',
            notification
        })
        await setTimeout(() => { 
            dispatch(remove_notification()) }, time * 1000);        
    }
}

export const remove_notification = () => {
    return {
        type: 'REMOVE_NOTIFICATION'
    }
}

export default notificationReducer