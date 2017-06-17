import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import node from './node'

export default combineReducers({
    router: routerReducer,
    node
})
