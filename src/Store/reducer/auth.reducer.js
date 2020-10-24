const initState = {
    isAuthenticated: false
}

function authReducer(state = initState, { type, payload }) {
    switch (type) {
        case 'AUTHENTICATE_USER' : 
            return {
                ...state,
                isAuthenticated: true
            };
        default:
            return state;
    }
}

export default authReducer;