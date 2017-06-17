import axios from 'axios';

const setAuth = (auth) => {
    if (auth) {
        const token = new Buffer(auth.username + ':' + auth.password).toString('base64');
        axios.defaults.headers.common['Authorization'] = `Basic ${token}`;



    } else {
        delete axios.defaults.headers.common['Authorization'];
    }

};

export default setAuth;