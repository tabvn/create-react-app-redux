import axios from 'axios'
import config from '../config';

export const LOAD = 'api/load';

const initialState = {
    nodes: []
};


const url = config.api;


export default (state = initialState, action = {}) => {

    switch (action.type) {


        case LOAD:

            return {
                ...state,
                items: action.payload
            }

        default:
            return state;
    }
}


export const find = () => {
    return dispatch => {

        return axios.get(url + '/api/nodes')
            .then(function (response) {
                dispatch({
                    type: LOAD,
                    payload: response.data,
                })

            });


    }

}



