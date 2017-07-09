import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './modules'
import {SET_CURRENT_USER} from './modules/auth'
import {PUSH_VIEW_CONTROLLER} from './modules/navigation'
import {CONNECT_SOCKET, DISCONNECT_SOCKET} from './modules/socket'
import {SET_APP_CONFIG, JOIN_GROUP_WITH_POPUP} from './modules/app'
import setAuth from './utils/setAuth'
import Cookies from 'js-cookie'


const initialState = {};
const enhancers = [];
const middleware = [
    thunk
];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
);

export default store
