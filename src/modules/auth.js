import setAuth from '../utils/setAuth';

export const SET_CURRENT_USER = 'auth/set_current_user';

export default (state = {user: {}}, action = {}) => {

    switch (action.type) {

        case SET_CURRENT_USER:


            return {
                ...state,
                user: action.payload
            };

        default:

            return state;
    }
}


export const login = (user) => {

    return dispatch => {


        //
        dispatch({
            type: SET_CURRENT_USER,
            payload: {username: 'admin', password: 'admin'}
        });

        setAuth(user);
        localStorage.setItem('auth', JSON.stringify(user));


    }
}

export const logout = () => {


    return dispatch => {


        dispatch({
            type: SET_CURRENT_USER,
            payload: null,
        });

        localStorage.removeItem('auth');
    }
}