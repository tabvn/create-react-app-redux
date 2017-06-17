import {createStore, applyMiddleware, compose} from 'redux'
import {routerMiddleware} from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './modules'
import setAuth from './utils/setAuth'
import {SET_CURRENT_USER} from './modules/auth'

export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [
    thunk,
    routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
)


const auth = localStorage.getItem('auth');
let authData = null;

if (typeof auth !== "undefined" && auth !== null) {
    authData = JSON.parse(auth);
}

store.dispatch({
    type: SET_CURRENT_USER,
    payload: authData
});

export default store